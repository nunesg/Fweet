import React from "react";
import "components/resultsPage/css/Search.css";
import SearchLogo from "components/common/images/searchLogo.svg";

const Search = () => {
  return (
    <div className="search-panel">
      <input placeholder="Search" />
      <img src={SearchLogo} alt="search logo" />
      <div className="vline"></div>
      <div className="media">
        <span>Media</span>
      </div>
    </div>
  );
};

export default Search;
