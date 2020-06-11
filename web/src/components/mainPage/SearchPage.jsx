import React, { Component } from "react";
import "./css/searchPage.css";
import Fweet from "./Fweet";
import SearchBox from "./SearchBox";
import SearchButton from "./SearchButton";

class SearchPage extends Component {
  state = {};
  render() {
    return (
      <div className="spg">
        <div className="up-main ctr-h">
          <Fweet />
        </div>
        <div className="bttm-main ctr-h">
          <SearchBox />
          <SearchButton />
        </div>
      </div>
    );
  }
}

export default SearchPage;
