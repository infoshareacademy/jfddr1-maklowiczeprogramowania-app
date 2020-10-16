import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: "Quicksand";
  font-weight: 500;
  background-color: #2b2b3f;
  color: #fbeccc;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 2rem;
`;

const Button = ({ type, label }) => {
  return <StyledButton type={type}>{label}</StyledButton>;
};

export default Button;
