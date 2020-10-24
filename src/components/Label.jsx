import React from "react";
import styled from "styled-components";

export const StyledLabelMobile = styled.div`
  margin: 25px 0 3px 0;
  display: inline-block;
  font-size: 1rem;
`;

export const StyledLabelDesktop = styled(StyledLabelMobile)`
  margin: 45px 0 3px 0;
`;

const Label = ({ children }) => {
  return <StyledLabelMobile>{children}</StyledLabelMobile>;
};

export default Label;
