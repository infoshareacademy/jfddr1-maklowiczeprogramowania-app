import React from "react";
import styled from "styled-components";

export const StyledLabelMobile = styled.label`
  margin: 25px 0 3px 0;
  font-size: 1rem;
`;

export const StyledLabelDesktop = styled(StyledLabelMobile)`
  margin: 45px 0 3px 0;
`;

const Label = ({ htmlFor, children }) => {
  return <StyledLabelMobile htmlFor={htmlFor}>{children}</StyledLabelMobile>;
};

export default Label;
