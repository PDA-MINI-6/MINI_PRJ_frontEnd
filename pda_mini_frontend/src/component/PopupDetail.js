import React from "react";
import PopupDetailComment from "./PopupDetailComment/PopupDetailComment";
import { Container, Row } from "react-bootstrap";

const PopupDetail = () => {
  return (
    <>
      <Container>
        <Row></Row>
        <Row>
          <PopupDetailComment />
        </Row>
      </Container>
    </>
  );
};

export default PopupDetail;
