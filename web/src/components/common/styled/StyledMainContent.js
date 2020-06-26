import styled from "styled-components";

const marginValue = "10px";

export const StyledMainContent = styled.div`
  align-items: center;
  justify-content: center;
  grid-row: 2/8;

  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.span`
  margin: ${marginValue};
  font-size: 180px;
  font-weight: 500;
`;
export const StyledSubtitle = styled.span`
  margin: ${marginValue};
  font-size: 36px;
`;

export const StyledContent = styled.div`
  margin: ${marginValue};
`;
