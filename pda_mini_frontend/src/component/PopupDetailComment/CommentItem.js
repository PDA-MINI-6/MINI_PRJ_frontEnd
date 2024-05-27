import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";

const CommentItem = props => {
  function timeAgo(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const diffInSeconds = Math.floor((now - date) / 1000);

    const units = [
      { name: "year", seconds: 60 * 60 * 24 * 365 },
      { name: "month", seconds: 60 * 60 * 24 * 30 },
      { name: "day", seconds: 60 * 60 * 24 },
      { name: "hour", seconds: 60 * 60 },
      { name: "minute", seconds: 60 },
      { name: "second", seconds: 1 },
    ];

    for (let unit of units) {
      const interval = Math.floor(diffInSeconds / unit.seconds);
      if (interval > 0) {
        return interval === 1
          ? `1 ${unit.name} ago`
          : `${interval} ${unit.name}s ago`;
      }
    }

    return "just now";
  }

  return (
    <MDBCard className="mb-4">
      <MDBCardBody>
        <p>{props.content}</p>

        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <MDBCardImage
              src="http://localhost:3000/userImage.svg"
              alt="avatar"
              width="25"
              height="25"
            />
            <p className="small mb-0 ms-2">{props.author}</p>
          </div>
          <div className="d-flex flex-row align-items-center">
            <p className="small text-muted mb-0">{timeAgo(props.createdAt)}</p>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default CommentItem;
