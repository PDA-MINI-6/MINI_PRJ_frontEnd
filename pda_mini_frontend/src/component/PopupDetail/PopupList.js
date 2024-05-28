import React from "react";
import "./PopupList.css";

export default function PopupList({
  title,
  address,
  startDate,
  endDate,
  content,
}) {
  return (
    <div className="mt-6 border-t border-gray-100">
      <dl className="details-grid">
        <div className="detail-item">
          <dt className="detail-title">Title</dt>
          <dd className="detail-content">{title}</dd>
        </div>
        <div className="detail-item">
          <dt className="detail-title">Address</dt>{" "}
          {/* 'Address' with capital 'A' */}
          <dd className="detail-content">{address}</dd>
        </div>
        <div className="detail-item">
          <dt className="detail-title">Start Date</dt>
          <dd className="detail-content">{startDate}</dd>
        </div>
        <div className="detail-item">
          <dt className="detail-title">End Date</dt>
          <dd className="detail-content">{endDate}</dd>
        </div>
        <div className="detail-item detail-item-full">
          <dt className="detail-title">Content</dt>
          <dd
            className="detail-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </dl>
    </div>
  );
}
