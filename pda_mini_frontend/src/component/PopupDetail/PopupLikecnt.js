import React, { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
export default function PopupLikecnt({ liked }) {
  const [like, setLike] = useState(liked);
  const [isClick, setIsClick] = useState(true);
  useEffect(() => {
    const storedLikeCount = localStorage.getItem("likeCount");
    const storedIsClick = localStorage.getItem("isClick");
    if (storedLikeCount !== null) {
      setLike(parseInt(storedLikeCount, 10));
    }
    if (storedIsClick !== null) {
      setIsClick(storedIsClick === "true");
    }
    setLike(liked);
  }, [like]);
  const handleLikeClick = () => {
    if (isClick) {
      setLike(like + 1);
      setIsClick(false);
      localStorage.setItem("likeCount", like + 1);
      localStorage.setItem("isClick", false);
    } else {
      if (like > 0) {
        setLike(like - 1);
      }
      setIsClick(true);
      localStorage.setItem("likeCount", like > 0 ? like - 1 : 0);
      localStorage.setItem("isClick", true);
    }
  };
  return (
    <div className="like">
      <h3>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <span
            onClick={handleLikeClick}
            style={{ cursor: "pointer", marginRight: "8px" }}
          >
            {isClick ? <FaRegHeart /> : <FaHeart color="red" />}
          </span>
          <span style={{ cursor: "default" }}>{like}</span>
        </div>
      </h3>
    </div>
  );
}
