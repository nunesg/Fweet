import React, { Component } from "react";
import "components/common/css/MainContent.css";
import Button from "components/common/Button";

class QueryOptions extends Component {
  state = {};

  mediaSelected = () => {
    alert("Media selected");
  };

  timelineSelected = () => {
    alert("Timeline selected");
  };

  render() {
    return (
      <div className="main-content">
        <SubTitle />
        <div className="elem-m">
          <Button
            content={<MediaOption />}
            onClick={this.mediaSelected}
          ></Button>
        </div>
        <div className="elem-m">
          <Button
            content={<TimelineOption />}
            onClick={this.timelineSelected}
          ></Button>
        </div>
      </div>
    );
  }
}

function SubTitle() {
  return <div className="sub-ttl">What are you searching for?</div>;
}

function MediaOption() {
  return <span>Relevant Media</span>;
}

function TimelineOption() {
  return <span>Timeline</span>;
}

export default QueryOptions;
