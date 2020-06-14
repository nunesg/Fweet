import React, { Component } from "react";
import "./css/TimelineEntry.css";

class TimelineEntry extends Component {
  state = {};

  getTimelineEntry() {
    var { content } = this.props;

    var entries = [<div>{content.full_text}</div>];

    var { media } = content.entities;
    console.log("media, ", media);
    if (media) {
      entries = entries.concat(
        media.map((img) => {
          return (
            <img
              src={img.media_url}
              style={{
                maxHeight: "200px",
                maxWidth: "200px",
                borderRadius: "15px",
                margin: "10px",
              }}
            ></img>
          );
        })
      );
    }
    return entries;
    // if(content.entities.)
  }

  render() {
    return <div className="tl-entry">{this.getTimelineEntry()}</div>;
  }
}

export default TimelineEntry;
