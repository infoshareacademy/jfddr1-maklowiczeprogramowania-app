import React from "react";
import styled from "styled-components";

export const StyledLabelMobile = styled.label`
  margin: 1.6rem 0 0.17rem 0;
  font-size: 1.1rem;
`;

export const LabelMobile = ({ htmlFor, children }) => {
  return <StyledLabelMobile htmlFor={htmlFor}>{children}</StyledLabelMobile>;
};

export const StyledLabelDesktop = styled(StyledLabelMobile)`
  margin: 2.5rem 0 0.17rem 0;
  font-size: 1.3rem;
  font-weight: 600;
`;

export const LabelDesktop = ({ htmlFor, children }) => {
  return <StyledLabelDesktop htmlFor={htmlFor}>{children}</StyledLabelDesktop>;
};
