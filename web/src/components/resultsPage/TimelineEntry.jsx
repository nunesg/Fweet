import React, { Component } from "react";
import "./css/TimelineEntry.css";

class TimelineEntry extends Component {
  state = {};
  render() {
    return <div className="tl-entry">{this.props.content.full_text}</div>;
  }
}

export default TimelineEntry;
