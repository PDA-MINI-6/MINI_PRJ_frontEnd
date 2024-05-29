import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const PasswordModal = ({ show, handleClose, handleConfirm }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    handleConfirm(password);
    setPassword("");
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>비밀번호 입력</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          취소
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PasswordModal;
