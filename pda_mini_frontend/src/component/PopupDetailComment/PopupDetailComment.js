import React, { useState, useEffect } from "react";
import "./PopupDetailComment.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import CommentItem from "./CommentItem";
import CommentInput from "./CommentInput";

const PopupDetailComment = props => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    const commentData = props.popupData.Comments;

    const sortedComments = commentData.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setCommentList(sortedComments);
  }, []);

  return (
    <>
      <div id="container">
        <MDBContainer style={{ padding: "0 10px 0 0" }}>
          <MDBRow className="justify-content-center" style={{ padding: 0 }}>
            <MDBCol style={{ padding: 0 }}>
              <MDBCard
                className="shadow-0 border"
                style={{ backgroundColor: "#ffffff" }}>
                <MDBCardBody>
                  {/* input item */}
                  <CommentInput
                    popupDataId={props.popupData.id}
                    setCommentList={setCommentList}
                  />
                  {/* list item */}
                  {commentList.map(comment => (
                    <CommentItem
                      key={comment._id}
                      commentId={comment._id}
                      popupDataId={props.popupData.id}
                      setCommentList={setCommentList}
                      author={comment.author}
                      content={comment.content}
                      createdAt={comment.createdAt}
                    />
                  ))}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default PopupDetailComment;
