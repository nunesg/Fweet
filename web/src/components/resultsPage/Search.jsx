import React, { Component } from "react";
import "components/resultsPage/css/Search.css";
import SearchLogo from "components/common/images/searchLogo.svg";

class Search extends Component {
  state = {};
  render() {
    return (
      <div className="search-panel">
        <input placeholder="Search" />
        <img src={SearchLogo} alt="search logo" />
        <div className="vline"></div>
        <div>media</div>
      </div>
    );
  }
}

export default Search;
