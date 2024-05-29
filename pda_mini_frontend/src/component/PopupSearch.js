import React, { useState } from "react";
import PopupSearchInput from "./PopupSearchInput";
import PopupSearchSelect from "./PopupSearchSelect";
import PopupSearchList from "./PopupSearchList";
import "./popupSearch.css";

const PopupSearch = ({ category }) => {
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("1"); // 1: 최신순, 2: 인기순

  return (
    <div className="parent">
      <PopupSearchInput searchText={searchText} setSearchText={setSearchText} />
      <div className="search-select">
        <PopupSearchSelect
          sortOption={sortOption}
          setSortOption={setSortOption}
          category={category}
        />
      </div>
      <PopupSearchList
        sortOption={sortOption}
        searchText={searchText}
        category={category}
      />
    </div>
  );
};

export default PopupSearch;
