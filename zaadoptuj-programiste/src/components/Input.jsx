import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: #2b2b3f;
  color: #fbfbfb;
  height: 50px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 1em;
`;

const Input = ({ type }) => {
  return <StyledInput type={type} />;
};

export default Input;
