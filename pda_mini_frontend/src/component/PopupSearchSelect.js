import React from "react";
import { MdOutlineCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import "./popupSearch.css";

const PopupSearchSelect = ({ setSortOption, category, mylike, setMylike }) => {
  const handleClick = () => {
    console.log("dd");
    if (category !== "popup") {
      alert("팝업스토어 외 카테고리에서는 '인기순' 검색만 가능합니다.");
    }
  };

  return (
    <div className="search-select-bar">
      <div className="mylike" onClick={() => setMylike((prev) => !prev)}>
        <div>
          {mylike ? (
            <MdCheckBox
              className="mylike-check"
              size="17px"
              color="lightcoral"
            />
          ) : (
            <MdOutlineCheckBoxOutlineBlank
              className="mylike-check"
              size="17px"
            />
          )}
        </div>
        <span className="mylike-text">찜한 곳만 보기</span>
      </div>
      <div onClick={handleClick}>
        <select
          className="custom-select"
          onChange={(e) => setSortOption(e.target.value)}
          style={{ cursor: "pointer", margin: "10px 0 0 0" }}
        >
          <option value="2">인기순</option>
          <option value="1">최신순</option>
        </select>
      </div>
    </div>
  );
};

export default PopupSearchSelect;
