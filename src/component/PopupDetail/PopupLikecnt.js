import React from "react";
import { useState } from "react";

export default function PopupLikecnt() {
  const [like, setLike] = useState(0);
  const [isClick, setIsClick] = useState(true);

  return (
    <div className="like">
      <h3>
        {isClick ? (
          <span
            onClick={() => {
              setLike(like + 1);
              setIsClick(false);
            }}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            🤍 {like}
          </span>
        ) : (
          <span
            onClick={() => {
              setLike(like - 1);
              setIsClick(true);
            }}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            🧡 {like}
          </span>
        )}
      </h3>
    </div>
  );
}
