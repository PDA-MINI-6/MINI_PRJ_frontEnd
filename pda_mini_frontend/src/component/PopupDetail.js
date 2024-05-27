import React from "react";
import PopupDetailComment from "./PopupDetailComment/PopupDetailComment";
import { Container, Row } from "react-bootstrap";
import Root from "./PopupDetail/Root";
import "./PopupDetail.css";

const PopupDetail = () => {
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
