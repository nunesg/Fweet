import React from "react";
import { SBoxInput } from "components/common/styled/StyledSBoxInput";

// receives id, placeholder and submit() params
const SearchBox = ({ id, placeholder, submit }) => {
  const keyUpEvent = (event) => {
    if (event.keyCode === 13) {
      submit();
    }
  };

  return (
    <SBoxInput
      id={id}
      type="text"
      onKeyUp={(event) => keyUpEvent(event)}
      placeholder={placeholder}
    ></SBoxInput>
  );
};

export default SearchBox;
