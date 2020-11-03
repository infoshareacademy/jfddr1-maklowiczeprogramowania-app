import React from "react";
import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: var(--dark-clr);
  color: var(--text-clr);
  height: 3.1rem;
  padding: 0.6rem;
  border-radius: 0.3rem;
  border: none;
  font-family: "Quicksand", sans-serif;
  font-size: 1em;
`;

const Input = React.forwardRef(({ id, name, type }, ref) => (
  <StyledInput ref={ref} id={id} name={name} type={type} />
));

export default Input;
