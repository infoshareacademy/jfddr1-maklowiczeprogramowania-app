import React from "react";
import styled from "styled-components";
import { StyledButton } from "./Button";

export const StyledSmallButton = styled(StyledButton)`
  font-weight: 600;
  font-size: 1.2rem;
  padding: 0.7rem;
  width: 50%;
`;

const SmallButton = ({ type, label }) => {
  return <StyledSmallButton type={type}>{label}</StyledSmallButton>;
};

export default SmallButton;
