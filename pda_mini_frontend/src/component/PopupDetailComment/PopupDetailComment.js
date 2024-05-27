import React, { useState, useEffect } from "react";
import "./PopupDetailComment.css";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBTextArea,
  MDBRow,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import CommentItem from "./CommentItem";

const PopupDetailComment = () => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    const fetchCommentList = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/data/mock-data.json"
        );
        setCommentList(response.data[0].comments);
      } catch (error) {
        console.error("Error fetching commentList:", error);
      }
    };

    fetchCommentList();
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
                  <MDBTextArea
                    placeholder="댓글을 입력해주세요."
                    id="textAreaExample"
                    rows="{1}"
                    style={{ height: "10px", marginBottom: "10px" }}
                  />

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      marginBottom: "10px",
                    }}>
                    <MDBInput
                      id="formControlSm"
                      placeholder="작성자"
                      type="text"
                      size="sm"
                      style={{ width: "100%" }}
                    />
                    <MDBBtn
                      color="secondary"
                      noRipple="false"
                      style={{
                        display: "flex",
                        height: "30px",
                        alignItems: "center",
                      }}>
                      작성하기
                    </MDBBtn>
                  </div>

                  {/* list item */}
                  {commentList.map(comment => (
                    <CommentItem
                      key={comment.id}
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
