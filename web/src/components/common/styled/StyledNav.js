import styled from "styled-components";

export const StyledNav = styled.nav`
  display: grid;
  max-height: 70px;
  align-items: end;
  grid-template-columns: repeat(12, auto);

  span {
    font-size: 24px;
    grid-column: 2;
  }
`;
