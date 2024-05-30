import React, { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { REQUEST_URL } from "../../constant";
import axios from "axios";

const PopupLikecnt = ({ liked, id }) => {
  const [likes, setLikes] = useState(liked);
  const [isLiked, setIsLiked] = useState(
    localStorage.getItem(`liked_${id}`) === "true"
  );

  const handleLikeClick = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikes((prev) => prev - 1);
      axios.patch(`${REQUEST_URL}/${id}/unlike`, {
        id,
        liked: likes,
      });
    } else {
      setIsLiked(true);
      setLikes((prev) => prev + 1);
      axios.patch(`${REQUEST_URL}/${id}/like`, {
        id,
        liked: likes,
      });
    }
    localStorage.setItem(`liked_${id}`, !isLiked);
  };

  return (
    <div className="like">
      <h3>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <span
            onClick={handleLikeClick}
            style={{ cursor: "pointer", marginRight: "8px" }}
          >
            {isLiked ? <FaHeart color="red" /> : <FaRegHeart />}
          </span>
          <span style={{ cursor: "default" }}>{likes}</span>
        </div>
      </h3>
    </div>
  );
};

export default PopupLikecnt;
