import React, { Component } from "react";
import Nav from "components/resultsPage/Nav";
import Content from "components/resultsPage/Content";
import "components/resultsPage/css/Results.css";

class ResultsPage extends Component {
  state = {
    username: "",
    queryType: "",
    timeline: [],
    suggestions: [],
    profile: [],
  };
  render() {
    console.log("result props: ", this.props);
    return (
      <div className="results">
        <Nav />
        <Content />
      </div>
    );
  }
}

export default ResultsPage;
