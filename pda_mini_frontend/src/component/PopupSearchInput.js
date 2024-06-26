import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import "./popupSearch.css";

const PopupSearchInput = (props) => {
  return (
    <div>
      <div className="search-bar">
        <IoSearchSharp size={"22px"} />
        <input
          className="search-input"
          placeholder="검색"
          type="text"
          value={props.searchText}
          onChange={(e) => {
            props.setSearchText(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default PopupSearchInput;
