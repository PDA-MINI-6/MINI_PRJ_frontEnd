import React, { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import axios from "axios";

const PopupSearchLiked = ({ initialLiked, initialLikes, id }) => {
  const [liked, setLiked] = useState(initialLiked); // 좋아요 눌렀는지 여부
  const [likes, setLikes] = useState(initialLikes); // 좋아요 수

  useEffect(() => {
    const likedStatus = localStorage.getItem(`liked_${id}`);
    if (likedStatus !== null) setLiked(JSON.parse(likedStatus));
  }, [id]);

  // useEffect(() => {
  //   if (likes !== initialLikes) {
  //     axios
  //       .post(`http://localhost:3000/data/mock-data.json/update`, { id, likes })
  //       .then((response) =>
  //         axios.get(`http://localhost:3000/data/mock-data.json/${id}`)
  //       );
  //   }
  // }, [likes, id, initialLikes]);

  const onLike = (e) => {
    e.stopPropagation();
    if (!liked) {
      setLiked(true);
      setLikes(likes + 1);
      localStorage.setItem(`liked_${id}`, true);
    } else {
      setLiked(false);
      setLikes(likes - 1);
      localStorage.setItem(`liked_${id}`, false);
    }
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
