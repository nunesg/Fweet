import React from "react";
import {
  StyledMainContent,
  StyledSubtitle,
  StyledContent,
} from "components/common/styled/StyledMainContent";
import SearchBox from "components/common/SearchBox";
import Button from "components/common/Button";
import * as Utils from "components/Utils.js";

const SearchPage = ({ queryType }) => {
  const submit = () => {
    var username = document.getElementById("sboxUsername").value;
    username = Utils.removeSpecialCharacters(username);

    window.location.pathname = `/results/${username}/${queryType}`;
  };

  return (
    <StyledMainContent>
      <StyledSubtitle>Whose timeline to search from?</StyledSubtitle>
      <StyledContent>
        <SearchBox id="sboxUsername" placeholder="Username" submit={submit} />
      </StyledContent>
      <StyledContent>
        <Button content="Send" small onClick={submit} />
      </StyledContent>
    </StyledMainContent>
  );
};

export default SearchPage;
