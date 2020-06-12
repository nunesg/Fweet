import React, { Component } from "react";
import getTimeline from "./js/resultsPageController";
import Nav from "./Nav";
import Timeline from "./Timeline";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import "./css/ResultsPage.css";

class ResultsPage extends Component {
  state = {
    timeline: [],
  };

  componentDidMount() {
    getTimeline(this.props.username).then((timeline) => {
      this.setState({ timeline: timeline });
    });
  }

  render() {
    return (
      <div className="results">
        {/* <div style={{ border: "1px white solid" }}></div>
        <div style={{ border: "1px white solid" }}></div>
        <div style={{ border: "1px white solid" }}></div>
        <div style={{ border: "1px white solid" }}></div>
        <div style={{ border: "1px white solid" }}></div>
        <div style={{ border: "1px white solid" }}></div>
        <div style={{ border: "1px white solid" }}></div>
        <div style={{ border: "1px white solid" }}></div> */}
        <Nav />
        <Profile />
        <Timeline timeline={this.state.timeline} />
        <Suggestions />
      </div>
    );
  }
}

export default ResultsPage;
