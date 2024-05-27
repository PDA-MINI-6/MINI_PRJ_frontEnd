import React from "react";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function PopupLikecnt() {
  const [like, setLike] = useState(0);
  const [isClick, setIsClick] = useState(true);

  return (
    <div className="like">
      <h3>
        {isClick ? (
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
