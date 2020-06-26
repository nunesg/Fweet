import React from "react";
import {
  StyledMainContent,
  StyledSubtitle,
  StyledContent,
} from "components/common/styled/StyledMainContent";
import Button from "components/common/Button";

const SearchOptions = (props) => {
  const goToSearchPage = (queryType) => {
    window.location.href = `/common/search/${queryType}`;
  };
  const mediaSelected = () => {
    goToSearchPage("media");
  };

  const timelineSelected = () => {
    goToSearchPage("timeline");
  };

  console.log("props: ", props);
  return (
    <StyledMainContent>
      <StyledSubtitle>What are you searching for?</StyledSubtitle>
      <StyledContent>
        <Button content={<MediaOption />} onClick={mediaSelected}></Button>
      </StyledContent>
      <StyledContent>
        <Button
          content={<TimelineOption />}
          onClick={timelineSelected}
        ></Button>
      </StyledContent>
    </StyledMainContent>
  );
};

function MediaOption() {
  return <span>Relevant Media</span>;
}

function TimelineOption() {
  return <span>Timeline</span>;
}

export default SearchOptions;
