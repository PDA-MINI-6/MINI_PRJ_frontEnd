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
  const [propdata, setPropData] = useState(null);

  useEffect(() => {
    axios
      .get(`${REQUEST_URL}/${id}`)
      .then((response) => {
        const data = response.data;
        setPropData(data);
      })
      .catch((error) => {
        console.error("Error fetching popup detail:", error);
      });

    if (!ready.current) {
      initMap();
      const localData = localStorage.getItem("searchList");
      if (localData) {
        initMarker(JSON.parse(localData));
      }
      console.log("맵 리로드");
    }
  }, [id, ready, initMap, initMarker]);

  const renderRoot = () => {
    if (propdata) {
      return <Root popupData={propdata} />;
    }
    return null;
  };

  const renderComment = () => {
    if (propdata) {
      return <PopupDetailComment popupData={propdata} id={id} />;
    }
    return null;
  };

  return (
    <Container id="detailcontainer">
      <Row>{renderRoot()}</Row>
      <Row>{renderComment()}</Row>
    </Container>
  );
};

export default PopupDetail;
