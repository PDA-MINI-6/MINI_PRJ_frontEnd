import React, { useState } from "react";
import "./PopupList.css";
// import zoomIcon from "./free-icon-zoom.png";

export default function PopupList({ title, address, start, end, conti }) {
  const [zoom, setZoom] = useState(false);

  return (
    <div className="mt-6 border-t border-gray-100">
      {/* <button onClick={() => setZoom(!zoom)} className="zoom-button">
        <img src={zoomIcon} alt="Zoom Icon" className="zoom-icon" />
        {zoom}
      </button> */}
      <dl className={`details-grid ${zoom ? "zoom" : ""}`}>
        <div className="detail-item">
          <dt
            className="detail-title"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            Title
          </dt>
          <dd className="detail-content">{title}</dd>
        </div>
        <div className="detail-item">
          <dt
            className="detail-title"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            Address
          </dt>
          <dd className="detail-content">{address}</dd>
        </div>
        <div className="detail-item">
          <dt
            className="detail-title"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            Start Date
          </dt>
          <dd className="detail-content">{start}</dd>
        </div>
        <div className="detail-item">
          <dt
            className="detail-title"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            End Date
          </dt>
          <dd className="detail-content">{end}</dd>
        </div>
        <div className="detail-item detail-item-full">
          <dt
            className="detail-title2"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            Content
          </dt>
          <dd
            className="detail-content2"
            dangerouslySetInnerHTML={{ __html: conti }}
          />
        </div>
      </dl>
    </div>
  );
}
