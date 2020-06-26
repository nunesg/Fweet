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

  constructor(props) {
    super(props);
    this.state.username = this.props.username;
  }

  render() {
    console.log("result props: ", this.props);
    return (
      <div className="results">
        <Nav />
        <Content
          username={this.state.username}
          queryType={this.props.queryType}
        />
      </div>
    );
  }
}

export default ResultsPage;
