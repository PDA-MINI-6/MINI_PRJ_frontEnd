import React, { useEffect, useState } from "react";
import PopupDetailComment from "./PopupDetailComment/PopupDetailComment";
import { Container, Row } from "react-bootstrap";
import Root from "./PopupDetail/Root";
import "./PopupDetail.css";
import { useParams } from "react-router-dom";
import { REQUEST_URL } from "../constant";
import axios from "axios";

const PopupDetail = () => {
  const { id } = useParams();
  const [popupData, setPopupData] = useState(null);

  useEffect(() => {
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
          {popupData ? (
            <PopupDetailComment popupData={popupData} id={id} />
          ) : null}
        </Row>
      </Container>
    </>
  );
};

export default PopupDetail;
