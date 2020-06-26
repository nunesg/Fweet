import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 18px;
  border-radius: 1em;
  background-color: rgb(56, 0, 54);
  font-size: 24px;
  font-weight: bold;
  color: white;

  min-width: 250px;

  border: none;
  outline: none;

  :hover {
    box-shadow: 0px 0px 14px 3px cyan;
    cursor: pointer;
  }
`;

export const StyledSmallButton = styled(StyledButton)`
  min-width: auto;
`;
