import React from "react";
import {
  StyledButton,
  StyledSmallButton,
} from "components/common/styled/StyledButton";

const smallButton = ({ onClick, ...props }) => {
  return (
    <StyledSmallButton onClick={onClick}>
      {props.content}
      {props.children}
    </StyledSmallButton>
  );
};

const Button = ({ small, onClick, ...props }) => {
  if (small) return smallButton({ onClick, ...props });
  return (
    <StyledButton onClick={onClick}>
      {props.content}
      {props.children}
    </StyledButton>
  );
};

export default Button;
