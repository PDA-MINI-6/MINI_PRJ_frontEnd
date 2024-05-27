import React, { useState } from "react";
import PopupSearchInput from "./PopupSearchInput";
import PopupSearchSelect from "./PopupSearchSelect";
import PopupSearchList from "./PopupSearchList";
import "./popupSearch.css";

const PopupSearch = (isClicked) => {
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("1"); // 1: 최신순, 2: 인기순

  return (
    <div>
      <PopupSearchInput searchText={searchText} setSearchText={setSearchText} />
      <div class="search-select">
        <PopupSearchSelect setSortOption={setSortOption} />
      </div>
      <PopupSearchList
        sortOption={sortOption}
        searchText={searchText}
        setSearchText={setSearchText}
      />
    </div>
  );
};

export default PopupSearch;
