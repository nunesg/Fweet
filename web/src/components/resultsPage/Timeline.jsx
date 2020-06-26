import React from "react";
import "components/resultsPage/css/Timeline.css";
import Tweet from "components/resultsPage/Tweet";

const Timeline = ({ timeline }) => {
  const getEntries = () => {
    return timeline.map((entry, i) => {
      return <Tweet key={i} entry={entry} />;
    });
  };
  return <div className="tl">{getEntries()}</div>;
};

export default Timeline;
