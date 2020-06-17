import React, { Component } from "react";
import "components/resultsPage/css/Content.css";
import Timeline from "components/resultsPage/Timeline";

class Content extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <div>Profile</div>
        <Timeline />
        <div>Suggestions</div>
      </div>
    );
  }
}

export default Content;
