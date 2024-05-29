import React, { useState } from "react";
import PopupSearchInput from "./PopupSearchInput";
import PopupSearchSelect from "./PopupSearchSelect";
import PopupSearchList from "./PopupSearchList";
import "./popupSearch.css";

const PopupSearch = ({ category }) => {
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("2"); // 1: 최신순, 2: 인기순
  const [mylike, setMylike] = useState(false);

  return (
    <div className="parent">
      <PopupSearchInput searchText={searchText} setSearchText={setSearchText} />
      <div className="search-select">
        <PopupSearchSelect
          sortOption={sortOption}
          setSortOption={setSortOption}
          category={category}
          mylike={mylike}
          setMylike={setMylike}
        />
      </div>
      <PopupSearchList
        sortOption={sortOption}
        searchText={searchText}
        category={category}
        mylike={mylike}
      />
    </div>
  );
};

export default PopupSearch;
