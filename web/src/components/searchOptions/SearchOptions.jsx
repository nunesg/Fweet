import React, { Component } from "react";
import "components/common/css/CommonPage.css";
import Nav from "components/common/Nav";
import QueryOptions from "components/searchOptions/QueryOptions";

class SearchOptions extends Component {
  state = {};
  render() {
    return (
      <div className="common-page">
        <Nav />
        <QueryOptions />
      </div>
    );
  }
}

export default SearchOptions;
