import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import "./popupSearch.css";

const PopupSearchInput = (props) => {
  const activeEnter = (e) => {
    if (e.key === "Enter") {
      // 엔터키 눌렀을 때 이벤트
    }
  };

  return (
    <div>
      <div class="search-bar">
        <IoSearchSharp size={"22px"} />
        <input
          placeholder="검색"
          type="text"
          value={props.searchText}
          onChange={(e) => {
            props.setSearchText(e.target.value);
          }}
          onKeyDown={(e) => activeEnter(e)}
        />
      </div>
    </div>
  );
};

export default PopupSearchInput;
