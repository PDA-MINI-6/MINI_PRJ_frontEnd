import React from "react";
import { useState } from "react";
import "./PopupTag.css";

export default function PopupTag() {
  //useParams id 받아와서 id에 해당되는 상세 페이지 렌더링
  //useEffect -> axios -> 백과 데이터(tag) 직접 통신

  const [hashtag, setHashTag] = useState([
    "#갤럭시팝업스토어",
    "#삼성전자",
    "#갤럭시",
    "#체험",
  ]);

  return (
    <div className="tag">
      {hashtag.map((tag, index) => (
        <span key={index} className="hashtag">
          {tag}
        </span>
      ))}
    </div>
  );
}
