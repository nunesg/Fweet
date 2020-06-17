import React, { Component } from "react";
import "components/resultsPage/css/Content.css";
import Timeline from "components/resultsPage/Timeline";

class Content extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <div style={{ border: "1px red solid" }}>Profile</div>
        <Timeline />
        <div style={{ border: "1px red solid" }}>Suggestions</div>
      </div>
    );
  }
}

export default Content;
