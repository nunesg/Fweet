import React from "react";
import Nav from "components/common/Nav";
import { StyledCommonPage } from "components/common/styled/StyledCommonPage";

const CommonPage = ({ children }) => {
  return (
    <StyledCommonPage>
      <Nav />
      {children}
    </StyledCommonPage>
  );
};

export default CommonPage;
