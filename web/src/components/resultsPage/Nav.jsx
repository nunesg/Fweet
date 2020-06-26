import React from "react";
import "components/resultsPage/css/NavResults.css";
import Search from "components/resultsPage/Search";

const Nav = () => {
  return (
    <div className="nav-results">
      <div className="l-list">
        <button>Home</button>
        <button>Twitter</button>
      </div>
      <div className="srch">
        <Search />
      </div>
      <div className="r-list">
        <button>Sign out</button>
      </div>
    </div>
  );
};

export default Nav;
