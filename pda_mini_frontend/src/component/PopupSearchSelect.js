import React from "react";
import "./popupSearch.css";

const PopupSearchSelect = ({ setSortOption }) => {
  return (
    <select
      className="custom-select"
      onChange={(e) => setSortOption(e.target.value)}
      style={{ cursor: "pointer", margin: "10px 0 0 0" }}
    >
      <option value="1">최신순</option>
      <option value="2">인기순</option>
    </select>
  );
};

export default PopupSearchSelect;
