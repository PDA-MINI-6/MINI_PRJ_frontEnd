import React, { useEffect, useContext } from "react";
import PopupDetailComment from "./PopupDetailComment/PopupDetailComment";
import { Container, Row } from "react-bootstrap";
import Root from "./PopupDetail/Root";
import "./PopupDetail.css";
import { naverMapContext } from "./NaverMapProvider";

const PopupDetail = () => {
  const { initMap, ready, initMarker } = useContext(naverMapContext);
  useEffect(() => {
    if (ready.current) {
      return;
    }

    initMap();
    const localData = localStorage.getItem("searchList");
    initMarker(JSON.parse(localData));
  }, []);

  return (
    <>
      <Container id="detailcontainer">
        <Row>
          <Root />
        </Row>
        <Row>
          <PopupDetailComment />
        </Row>
      </Container>
    </>
  );
};

export default PopupDetail;
