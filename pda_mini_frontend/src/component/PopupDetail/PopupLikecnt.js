import React from "react";
import { useState } from "react";

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
              🤍
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
              🧡
            </span>
            <span style={{ cursor: "default" }}>{like}</span>
          </div>
        )}
      </h3>
    </div>
  );
}
