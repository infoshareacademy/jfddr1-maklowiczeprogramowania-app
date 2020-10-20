import React from "react";
import styled from "styled-components";

export const StyledLabel = styled.div`
  margin: 25px 0 3px 0;
  display: inline-block;
  font-size: 1rem;
`;

const Label = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};

export default Label;
