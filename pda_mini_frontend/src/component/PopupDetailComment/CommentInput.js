import { MDBTextArea, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import axios from "axios";
import { REQUEST_URL } from "../../constant";

const CommentInput = ({ popupDataId, setCommentList }) => {
  const [commentContent, setCommentContent] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [commentPassword, setCommentPassword] = useState("");

  const handlePostComment = () => {
    if (
      commentContent.trim() === "" ||
      commentAuthor.trim() === "" ||
      commentPassword.trim() === ""
    ) {
      alert("작성자, 비밀번호, 댓글 내용을 입력해주세요.");
      return;
    }

    axios
      .post(`${REQUEST_URL}/${popupDataId}/comment`, {
        author: commentAuthor,
        content: commentContent,
        password: commentPassword,
      })
      .then(response => {
        const sortedComments = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setCommentList(sortedComments);

        setCommentContent("");
        setCommentAuthor("");
        setCommentPassword(""); // 비밀번호 입력 필드도 초기화
      })
      .catch(error => {
        console.error("Error posting comment:", error);
      });
  };

  return (
    <>
      <MDBTextArea
        placeholder="댓글을 입력해주세요."
        id="textAreaExample"
        rows="1"
        style={{ height: "10px", marginBottom: "10px" }}
        value={commentContent}
        onChange={e => setCommentContent(e.target.value)}
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
          value={commentAuthor}
          onChange={e => setCommentAuthor(e.target.value)}
        />
        <MDBInput
          id="formControlSm"
          placeholder="비밀번호"
          type="password" // 비밀번호 입력 시 텍스트가 보이지 않도록 설정
          size="sm"
          value={commentPassword}
          onChange={e => setCommentPassword(e.target.value)}
        />
        <MDBBtn
          color="secondary"
          noRipple="false"
          style={{
            display: "flex",
            height: "100%",
            alignItems: "center",
          }}
          onClick={handlePostComment}>
          작성하기
        </MDBBtn>
      </div>
    </>
  );
};

export default CommentInput;
