import React, { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import axios from "axios";

const PopupSearchLiked = ({
  initialLiked,
  initialLikes,
  id,
  onLikesChange,
}) => {
  const [liked, setLiked] = useState(initialLiked);
  const [likes, setLikes] = useState(initialLikes);

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
    const newLiked = !liked;
    const newLikes = newLiked ? likes + 1 : likes - 1;

    setLiked(newLiked);
    setLikes(newLikes);
    localStorage.setItem(`liked_${id}`, newLiked);
    onLikesChange(id, newLikes);

    axios
      .post("http://localhost:3000/data/like", { id, liked: newLiked })
      .then((response) => {
        console.log("Successfully updated like status");
      })
      .catch((error) => {
        console.error("Error updating like status:", error);
      });
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
