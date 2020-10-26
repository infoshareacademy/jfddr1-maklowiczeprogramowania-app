import React from "react";
import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: #2b2b3f;
  color: #fbfbfb;
  height: 50px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-family: "Quicksand", sans-serif;
  font-size: 1em;
`;

const Input = ({ id, name, type }) => {
  return <StyledInput id={id} name={name} type={type} />;
};

export default Input;
