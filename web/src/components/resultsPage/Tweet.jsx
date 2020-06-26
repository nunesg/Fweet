import React from "react";
import "components/resultsPage/css/Tweet.css";

const Tweet = ({ entry }) => {
  return <div className="tt">{entry.full_text}</div>;
};

export default Tweet;
