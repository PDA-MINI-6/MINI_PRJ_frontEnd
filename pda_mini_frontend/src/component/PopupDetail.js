
import React, { useEffect, useState, useContext } from "react";
import PopupDetailComment from "./PopupDetailComment/PopupDetailComment";
import { Container, Row } from "react-bootstrap";
import Root from "./PopupDetail/Root";
import "./PopupDetail.css";
import { naverMapContext } from "./NaverMapProvider";

import { useParams } from "react-router-dom";
import { REQUEST_URL } from "../constant";
import axios from "axios";

const PopupDetail = () => {
  const { id } = useParams();
  const [popupData, setPopupData] = useState(null);
  const { initMap, ready, initMarker } = useContext(naverMapContext);
  
  
  useEffect(() => {
    if (!ready.current) {
      initMap();
      const localData = localStorage.getItem("searchList");
      initMarker(JSON.parse(localData));
    } 
    
    axios
      .get(`${REQUEST_URL}/${id}`)
      .then(response => {
        setPopupData(response.data);
      })
      .catch(error => {
        console.error("Error fetching popup detail:", error);
      });
  }, [id]);

  return (
    <>
      <Container id="detailcontainer">
        <Row>
          <Root popupData={popupData} />
        </Row>
        <Row>
          <PopupDetailComment />
        </Row>
      </Container>
    </>
  );
};

export default PopupDetail;
