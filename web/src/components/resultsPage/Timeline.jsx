import React, { Component } from "react";
import "./css/Timeline.css";
import TimelineEntry from "./TimelineEntry";

class Timeline extends Component {
  state = {};
  render() {
    return (
      <div className="tl">
        {this.props.timeline.map((entry) => {
          return <TimelineEntry content={entry} />;
        })}
      </div>
    );
  }
}

export default Timeline;
