import React, { useEffect, useState, useContext } from "react";
import PopupDetailComment from "./PopupDetailComment/PopupDetailComment";
import { Container, Row } from "react-bootstrap";
import Root from "./PopupDetail/Root";
import "./PopupDetail.css";
import { useParams } from "react-router-dom";
import { REQUEST_URL } from "../constant";
import axios from "axios";
import { naverMapContext } from "./NaverMapProvider";

const PopupDetail = () => {
  const { ready, initMap, initMarker } = useContext(naverMapContext);

  const { id } = useParams();
  const [popupData, setPopupData] = useState(null);

  useEffect(() => {
    axios
      .get(`${REQUEST_URL}/${id}`)
      .then((response) => {
        setPopupData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching popup detail:", error);
      });

    if (!ready.current) {
      initMap();
      const localData = localStorage.getItem("searchList");
      initMarker(JSON.parse(localData));
      console.log("맵 리로드");
    }
  }, [id]);

  return (
    <>
      <Container id="detailcontainer">
        <Row>{popupData && <Root popupData={popupData} />}</Row>
        <Row>
          {popupData ? (
            <PopupDetailComment popupData={popupData} id={id} />
          ) : null}
        </Row>
      </Container>
    </>
  );
};

export default PopupDetail;
