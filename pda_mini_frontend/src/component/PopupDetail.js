import React from "react";
import PopupDetailComment from "./PopupDetailComment/PopupDetailComment";
import { Container, Row } from "react-bootstrap";
import Root from "./PopupDetail/Root";

const PopupDetail = () => {
  return (
    <>
      <Container>
        <Row></Row>
        <Row>
          <Root />
          <PopupDetailComment />
        </Row>
      </Container>
    </>
  );
};

export default PopupDetail;
