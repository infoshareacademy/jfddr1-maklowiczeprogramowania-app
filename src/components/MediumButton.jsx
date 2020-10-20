import React from "react";
import styled from "styled-components";
import { StyledButton } from "./Button";

const StyledMediumButton = styled(StyledButton)`
  font-weight: 600;
  font-size: 1.2rem;
  padding: 25px 0;
  width: 50%;
`;

const MediumButton = ({ type, label }) => {
  return <StyledMediumButton type={type}>{label}</StyledMediumButton>;
};

export default MediumButton;
