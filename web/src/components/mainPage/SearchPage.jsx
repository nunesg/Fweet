import React, { Component } from "react";
import "./css/searchPage.css";
import Fweet from "./Fweet";
import SearchBox from "./SearchBox";
import SearchButton from "./SearchButton";

class SearchPage extends Component {
  state = {};

  sendQuery = () => {
    this.props.setUsername(document.getElementById("searchBox").value);
  };

  render() {
    return (
      <div className="spg">
        <div className="up-main ctr-h">
          <Fweet />
        </div>
        <div className="bttm-main ctr-h">
          <SearchBox sendQuery={this.sendQuery} />
          <SearchButton sendQuery={this.sendQuery} />
        </div>
      </div>
    );
  }
}

export default SearchPage;
