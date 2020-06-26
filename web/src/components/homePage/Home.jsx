import React from "react";
import styled from "styled-components";
import {
  StyledMainContent,
  StyledTitle,
  StyledSubtitle,
  StyledContent,
} from "components/common/styled/StyledMainContent";
import Button from "components/common/Button";

const Img = styled.img`
  margin-left: 8px;
  height: 1em;
  width: 1em;
`;

const LoginButton = () => {
  return (
    <span>
      <span>Login</span>
      <Img
        src="https://img.pngio.com/white-twitter-icon-free-white-social-icons-twitter-logo-white-256_256.png"
        alt="logo"
      />
    </span>
  );
};

const Home = ({ onLoginClick }) => {
  return (
    <StyledMainContent>
      <StyledTitle>Fweet</StyledTitle>
      <StyledSubtitle>The information in your hands</StyledSubtitle>
      <StyledContent>
        <Button content={<LoginButton />} onClick={onLoginClick} />
      </StyledContent>
    </StyledMainContent>
  );
};

export default Home;
