import React from "react";
import "./popupSearch.css";

const PopupSearchSelect = ({ setSortOption, category }) => {
  const handleClick = () => {
    if (category !== "popup") {
      alert("팝업스토어 외 카테고리에서는 '인기순' 검색만 가능합니다.");
    }
  };

  return (
    <span onClick={handleClick}>
      <select
        className="custom-select"
        onChange={(e) => setSortOption(e.target.value)}
        style={{
          cursor: "pointer",
          margin: "10px 0 0 0",
        }}
        // disabled={category !== "popup"}
      >
        <option value="2">인기순</option>
        <option value="1">최신순</option>
      </select>
    </span>
  );
};

export default PopupSearchSelect;
