import React from "react";
import { Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import "./popupSearch.css";

const Navigation = ({ setCategory }) => {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center",
          margin: "0 4vw",
        }}
      >
        <select
          className="custom-select"
          onChange={(e) => setCategory(e.target.value)}
          style={{
            fontSize: "15px",
            cursor: "pointer",
            width: "7em",
            backgroundColor: "rgba(var(--bs-dark-rgb), var(--bs-bg-opacity))",
          }}
        >
          <option value="0">전체</option>
          <option value="1">팝업스토어</option>
          <option value="2">식당</option>
          <option value="3">카페</option>
        </select>
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          Service{" "}
          <img
            alt=""
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <div style={{ width: "7em" }}>
          <AiFillHome
            color="white"
            size="20px"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </Navbar>
  );
};

export default Navigation;
