import React from "react";
import styled from "styled-components";
import { StyledButton } from "./Button";

export const StyledSmallButton = styled(StyledButton)`
  font-weight: 600;
  font-size: 0.9rem;
  padding: 1rem 0 1rem 0;
  width: 50%;
`;

const SmallButton = ({ type, label }) => {
  return <StyledSmallButton type={type}>{label}</StyledSmallButton>;
};

export default SmallButton;
