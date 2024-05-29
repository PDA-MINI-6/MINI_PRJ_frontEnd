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
  const [propdata, setPropData] = useState(null);
  const [popupData, setPopupData] = useState(null);
  const [foodData, setFoodData] = useState(null);
  const [cafeData, setCafeData] = useState(null);

  useEffect(() => {
    console.log("test");
    axios
      .get(`${REQUEST_URL}/${id}`)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setPropData(data); // propdata를 설정합니다.
        if (data.category === "popup") {
          setPopupData(data);
        } else if (data.category === "restaurant") {
          setFoodData(data);
        } else if (data.category === "cafe") {
          setCafeData(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching popup detail:", error);
      });
  }, [id]);

  const renderRoot = () => {
    if (popupData) {
      return <Root popupData={popupData} />;
    } else if (foodData) {
      return <Root popupData={foodData} />;
    } else if (cafeData) {
      return <Root popupData={cafeData} />;
    }
    return null;
  };

  const renderComment = () => {
    if (popupData) {
      return <PopupDetailComment popupData={popupData} id={id} />;
    } else if (foodData) {
      return <PopupDetailComment popupData={foodData} id={id} />;
    } else if (cafeData) {
      return <PopupDetailComment popupData={cafeData} id={id} />;
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
