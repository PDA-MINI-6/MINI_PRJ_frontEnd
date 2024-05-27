import React, { useState, useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PopupSearchLiked from "./PopupSearchLiked";

const PopupSearchList = ({ sortOption, searchText, setSearchText }) => {
  const navigate = useNavigate();
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/data/mock-data.json`)
      .then((response) => {
        //console.log(response);
        setSearchList(response.data);
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
    <ListGroup as="ol" style={{ margin: "10px 0 20px 0" }}>
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
            onClick={() => navigate(`/${elem.id}`)}
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
              initialLiked={localStorage.getItem(`liked_${elem.id}`) === "true"}
              initialLikes={elem.liked}
              id={elem.id}
            />
          </ListGroup.Item>
        ) : null;
      })}
    </ListGroup>
  );
};

export default PopupSearchList;
