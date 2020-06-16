import React, { Component } from "react";
import Nav from "components/resultsPage/Nav";
import Content from "components/resultsPage/Content";
import "components/resultsPage/css/Results.css";

class ResultsPage extends Component {
  state = {};
  render() {
    return (
      <div className="results">
        <Nav />
        <Content />
      </div>
    );
  }
}

export default ResultsPage;
