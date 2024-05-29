import React, { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import axios from "axios";
import { REQUEST_URL } from "../constant";

const PopupSearchLiked = ({ initialLiked, initialLikes, id }) => {
  const [liked, setLiked] = useState(initialLiked); // 좋아요 눌렀는지 여부
  const [likes, setLikes] = useState(initialLikes); // 좋아요 수

  useEffect(() => {
    const likedStatus = localStorage.getItem(`liked_${id}`);
    if (likedStatus !== null) setLiked(JSON.parse(likedStatus));
  }, [id]);

  const onLike = (e) => {
    e.stopPropagation();
    if (liked) {
      // 이미 좋아요를 누른 상황이면
      setLiked(false); // 좋아요 취소
      setLikes((prev) => prev - 1);
      axios.patch(`${REQUEST_URL}/${id}/unlike`, {
        id,
        liked: likes,
      });
    } else {
      // 좋아요를 누르지 않은 상황이면
      setLiked(true); // 좋아요
      setLikes((prev) => prev + 1);
      axios.patch(`${REQUEST_URL}/${id}/like`, {
        id,
        liked: likes,
      });
    }
    localStorage.setItem(`liked_${id}`, !liked);
  };

  return (
    <span
      onClick={onLike}
      style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
    >
      {liked ? (
        <FaHeart color="red" style={{ marginRight: "5px" }} />
      ) : (
        <FaRegHeart style={{ marginRight: "5px" }} />
      )}
      {likes}
    </span>
  );
};

export default PopupSearchLiked;
