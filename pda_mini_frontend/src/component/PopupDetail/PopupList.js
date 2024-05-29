import React from "react";
import "./PopupList.css";

export default function PopupList({ title, address, start, end, conti }) {
  return (
    <div className="mt-6 border-t border-gray-100">
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
            Start Date
          </dt>
          <dd className="detail-content">{start}</dd>
        </div>
        <div className="detail-item">
          <dt
            className="detail-title"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            End Date
          </dt>
          <dd className="detail-content">{end}</dd>
        </div>
        <div className="detail-item detail-item-full">
          <dt
            className="detail-title"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Content
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
