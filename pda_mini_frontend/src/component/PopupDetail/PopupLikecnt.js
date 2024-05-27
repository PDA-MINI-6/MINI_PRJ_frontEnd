import React from "react";
import { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function PopupLikecnt() {
  const [like, setLike] = useState(1);
  const [isClick, setIsClick] = useState(true);

  useEffect(() => {
    const storedLikeCount = localStorage.getItem(`like`);
    console.log(storedLikeCount);
    if (storedLikeCount !== null) setIsClick(storedLikeCount);
  }, [like]);

  return (
    <div className="like">
      <h3>
        {isClick === "false" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <span
              onClick={() => {
                setLike(like + 1);
                setIsClick(false);
                localStorage.setItem(`like`, true);
              }}
              style={{ cursor: "pointer", marginRight: "8px" }}
            >
              <FaRegHeart />
            </span>
            <span style={{ cursor: "default" }}>{like}</span>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <span
              onClick={() => {
                setLike(like - 1);
                setIsClick(true);
                localStorage.setItem(`like`, false);
              }}
              style={{ cursor: "pointer", marginRight: "8px" }}
            >
              <FaHeart color="red" />
            </span>
            <span style={{ cursor: "default" }}>{like}</span>
          </div>
        )}
      </h3>
    </div>
  );
}
