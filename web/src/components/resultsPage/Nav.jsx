import React, { Component } from "react";
import "components/resultsPage/css/NavResults.css";
import Search from "components/resultsPage/Search";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="nav-results">
        <div className="l-list">
          <div>Content 1</div>
          <div>Content 2</div>
        </div>
        <div className="srch">
          <Search />
        </div>
        <div className="r-list">
          <div>Content 1</div>
          <div>Content 2</div>
        </div>
      </div>
    );
  }
}

export default Nav;
