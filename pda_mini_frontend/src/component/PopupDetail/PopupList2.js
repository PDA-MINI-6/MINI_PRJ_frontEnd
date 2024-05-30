import React from "react";
import "./PopupList.css";
import { useState } from "react";

export default function PopupList2({ title, address, start, end, conti }) {
  const [zoom, setZoom] = useState(false);
  return (
    <div className="mt-6 border-t border-gray-100">
      {/* <button onClick={() => setZoom(!zoom)} className="zoom-button">
        {zoom ? "확대하기 종료" : "확대하기"}
      </button> */}
      <dl className="details-grid">
        <div className="detail-item">
          <dt
            className="detail-title"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Title
          </dt>
          <dd className="detail-content">{title}</dd>
        </div>
        <div className="detail-item">
          <dt
            className="detail-title"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Address
          </dt>{" "}
          {/* 'Address' with capital 'A' */}
          <dd className="detail-content">{address}</dd>
        </div>
        <div className="detail-item">
          <dt
            className="detail-title"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Open
          </dt>
          <dd className="detail-content">{start}</dd>
        </div>
        <div className="detail-item">
          <dt
            className="detail-title"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Close
          </dt>
          <dd className="detail-content">{end}</dd>
        </div>
        <div className="detail-item detail-item-full">
          <dt
            className="detail-title"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            MENU
          </dt>
          <dd
            className="detail-content"
            dangerouslySetInnerHTML={{ __html: conti }}
          />
        </div>
      </dl>
    </div>
  );
}
