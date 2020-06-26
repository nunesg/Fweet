import styled from "styled-components";

export const StyledCommonPage = styled.div`
  background-image: linear-gradient(
    to bottom right,
    rgba(29, 161, 242, 1),
    rgba(148, 0, 148, 1),
    rgba(29, 161, 242, 0)
  );

  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: white;

  height: 100%;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
`;
