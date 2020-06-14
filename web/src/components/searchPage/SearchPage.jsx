import React, { Component } from "react";
import "components/common/css/CommonPage.css";
import Nav from "components/common/Nav";
import SearchFields from "components/searchPage/SearchFields";

class SearchPage extends Component {
  state = {};
  render() {
    return (
      <div className="common-page">
        <Nav />
        <SearchFields />
      </div>
    );
  }
}

export default SearchPage;
