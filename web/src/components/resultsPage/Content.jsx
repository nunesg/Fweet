import React, { Component } from "react";
import "components/resultsPage/css/Content.css";
import Timeline from "components/resultsPage/Timeline";
import * as Controller from "components/controllers/resultsPageController";

class Content extends Component {
  state = {
    content: {
      timeline: [],
      user: {},
      suggestions: [],
    },
  };

  getTimeline = async () => {
    var content = await Controller.getContent(
      this.props.username,
      this.props.queryType
    );
    this.setState({
      content: content,
    });
  };

  componentDidMount() {
    this.getTimeline();
  }

  render() {
    console.log("rendering");
    return (
      <div className="content">
        <div>Profile</div>
        <Timeline timeline={this.state.content.timeline} />
        <div>Suggestions</div>
      </div>
    );
  }
}

export default Content;
