import React, { useState, useEffect, useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PopupSearchLiked from "./PopupSearchLiked";
import { naverMapContext } from "./NaverMapProvider";
import "./popupSearch.css";

const PopupSearchList = ({ sortOption, searchText, setSearchText }) => {
  const navigate = useNavigate();
  const [searchList, setSearchList] = useState([]);
  const { initMarker, initMap, moveMap } = useContext(naverMapContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/data/mock-data.json`)
      .then((response) => {
        setSearchList(response.data);

        initMap();
        initMarker(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const sortedList = [...searchList].sort((a, b) => {
    if (sortOption === "1") {
      return new Date(b.startDate) - new Date(a.startDate);
    } else if (sortOption === "2") {
      return b.liked - a.liked;
    }
  });

  return (
    <div id="container">
      <ListGroup as="ol">
        {sortedList.map((elem) => {
          return searchText === "" ||
            elem.tags.some((tag) => tag.includes(searchText)) ||
            elem.title.includes(searchText) ||
            elem.subtitle.includes(searchText) ? (
            <ListGroup.Item
              key={elem.id}
              action
              as="li"
              className="d-flex justify-content-between align-items-start"
              style={{ cursor: "pointer" }}
              onClick={() => {
                moveMap(elem.location);
                navigate(`/${elem.id}`);
              }}
            >
              <div>
                <img
                  src={elem.images[0]}
                  style={{
                    width: "100px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="ms-2 me-auto">
                <div className="fw-bold" style={{ margin: "2px 0" }}>
                  {elem.title}
                </div>
                "{elem.subtitle}"
                <div style={{ fontSize: "12px", margin: "6px" }}>
                  {elem.startDate} ~ {elem.endDate}
                </div>
              </div>
              <PopupSearchLiked
                initialLiked={
                  localStorage.getItem(`liked_${elem.id}`) === "true"
                }
                initialLikes={elem.liked}
                id={elem.id}
              />
            </ListGroup.Item>
          ) : null;
        })}
      </ListGroup>
    </div>
  );
};

export default PopupSearchList;
