import React, { useState } from "react";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import { TiDeleteOutline } from "react-icons/ti";
import axios from "axios";
import { REQUEST_URL } from "../../constant";
import PasswordModal from "./PasswordModal"; // PasswordModal 컴포넌트 임포트
import { FaUser } from "react-icons/fa6";

const CommentItem = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [commentIdToDelete, setCommentIdToDelete] = useState(null);

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

  const handleDeleteClick = (commentId) => {
    setCommentIdToDelete(commentId);
    setShowModal(true);
  };

  const handleConfirmDelete = (password) => {
    setShowModal(false);

    axios
      .delete(
        `${REQUEST_URL}/${props.popupDataId}/comment/${commentIdToDelete}`,
        {
          data: { password },
        }
      )
      .then((response) => {
        const sortedComments = response.data.comments.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        props.setCommentList(sortedComments);
      })
      .catch((error) => {
        if (error.response && error.response.status === 403) {
          alert("비밀번호가 잘못되었습니다.");
        } else {
          console.error("Error deleting comment:", error);
        }
      });
  };

  return (
    <>
      <MDBCard
        className="mb-4"
        style={{ height: "80px", display: "flex", justifyContent: "center" }}
      >
        <MDBCardBody>
          <div className="d-flex justify-content-between">
            <p style={{ fontSize: "15px" }}>{props.content}</p>
            <TiDeleteOutline
              size="20px"
              style={{ cursor: "pointer" }}
              onClick={() => handleDeleteClick(props.commentId)}
            />
          </div>

          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <FaUser />
              <p className="small mb-0 ms-2">{props.author}</p>
            </div>
            <div className="d-flex flex-row align-items-center">
              <p className="small text-muted mb-0">
                {timeAgo(props.createdAt)}
              </p>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>

      <PasswordModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default CommentItem;
