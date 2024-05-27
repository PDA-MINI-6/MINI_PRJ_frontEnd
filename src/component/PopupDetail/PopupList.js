import React, { useState } from "react";
//import ListGroup from "react-bootstrap/ListGroup";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import "./PopupList.css";

//useParams id 받아와서 id에 해당되는 상세 페이지 렌더링
//useEffect -> axios -> 백과 데이터(tag) 직접 통신

export default function PopupList() {
  const [contentdata, setContentData] = useState([]);

  return (
    <div className="mt-6 border-t border-gray-100">
      <dl className="details-grid">
        <div className="detail-item">
          <dt className="detail-title">title</dt>
          <dd className="detail-content">Master</dd>
        </div>
        <div className="detail-item">
          <dt className="detail-title">subtitle</dt>
          <dd className="detail-content">Bacper</dd>
        </div>
        <div className="detail-item">
          <dt className="detail-title">stardate</dt>
          <dd className="detail-content">margotfoster@em</dd>
        </div>
        <div className="detail-item">
          <dt className="detail-title">enddate</dt>
          <dd className="detail-content">$120,000</dd>
        </div>
        <div className="detail-item detail-item-full">
          <dt className="detail-title">content</dt>
          <dd className="detail-content">
            "짜파게티의 40주년을 기념하여, 세대를 초월하는 맛으로 꾸준히
            사랑받아온 짜파게티가 분식점을 차렸습니다. 다양한 포토존과 게임,
            귀여운 굿즈 등 즐길 거리가 가득한 #짜파게티분식점팝업스토어에서
            즐거운 시간을 보내세요!
          </dd>
        </div>
      </dl>
    </div>
  );
}
