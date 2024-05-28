import React from "react";
import "./PopupTag.css";
export default function PopupTag({ tags }) {
  return (
    <div className="tag">
      {tags.map((tag, index) => (
        <span key={index} className="hashtag">
          {tag}
        </span>
      ))}
    </div>
  );
}
