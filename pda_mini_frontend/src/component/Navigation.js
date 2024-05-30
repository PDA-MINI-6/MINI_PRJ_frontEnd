import React, { useContext } from "react";
import { Navbar } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import "./popupSearch.css";
import { naverMapContext } from "./NaverMapProvider";

const Navigation = ({ setCategory }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMainpage = location.pathname === "/";
  const { offAnimation } = useContext(naverMapContext);

  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{ padding: "0" }}>
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
            cursor: isMainpage ? "pointer" : "default",
            width: "7em",
            backgroundColor: "rgba(var(--bs-dark-rgb), var(--bs-bg-opacity))",
          }}
          disabled={!isMainpage}
        >
          <option value="0">전체</option>
          <option value="popup">팝업스토어</option>
          <option value="restaurant">식당</option>
          <option value="cafe">카페</option>
        </select>
        <Navbar.Brand
          onClick={() => {
            navigate("/");
            offAnimation();
          }}
          style={{ cursor: "pointer" }}
        >
          <img
            alt=""
            src="/logo.svg"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <div style={{ width: "7em" }}>
          <AiFillHome
            color="white"
            size="20px"
            style={{ cursor: "pointer", paddingBottom: "3px" }}
            onClick={() => {
              navigate("/");
              offAnimation();
            }}
          />
          <span
            style={{ color: "white", marginLeft: "3px", cursor: "pointer" }}
            onClick={() => {
              navigate("/");
              offAnimation();
            }}
          >
            HOME
          </span>
        </div>
      </div>
    </Navbar>
  );
};

export default Navigation;
