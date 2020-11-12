import React from "react";
import styled from "styled-components";

export const StyledTextArea = styled.textarea`
  background-color: var(--dark-clr);
  color: var(--text-clr);
  height: 3.1rem;
  padding: 0.6rem;
  border-radius: 0.3rem;
  border: none;
  font-family: "Quicksand", sans-serif;
  font-size: 1.1em;
  font-weight: 600;
`;

const TextArea = React.forwardRef(({ id, name, type }, ref) => (
  <StyledTextArea ref={ref} id={id} name={name} type={type} />
));

export default TextArea;
