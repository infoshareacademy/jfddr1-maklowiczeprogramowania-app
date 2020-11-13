import React from "react";
import Select from "react-select";
import styled from "styled-components";
import { StyledLabelDesktop } from "../components/Label";
import { StyledInput } from "../components/Input";
import { StyledSmallButton } from "./buttons/SmallButton";
import { StyledTextArea } from "../components/TextArea";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 42rem;
`;

export const Button = styled(StyledSmallButton)`
  width: 11em;
  margin: 2em 0.5em 0 0.5em;
  color: var(--dark-clr);
  background-color: var(--light-clr);

  @media (min-width: 1024px) {
    color: var(--light-clr);
    background-color: var(--dark-clr);
  }
`;

export const SelectButton = styled(Button)`
  font-weight: 600;
  font-size: 1rem;
  width: 8rem;
  margin: 0;
`;

export const StyledGreyishInput = styled(StyledInput)`
  width: 100%;
  height: 2.5em;
  color: var(--dark-clr);
  background-color: #f2f5f6;

  @media (min-width: 1024px) {
    color: var(--light-clr);
    background-color: var(--dark-clr);
  }
`;

export const GreyishTextArea = styled(StyledTextArea)`
  min-width: 100%;
  max-width: 100%;
  min-height: 15em;
  max-height: 30rem;items
  color: var(--dark-clr);
  background-color: #f2f5f6;

  @media (min-width: 1024px) {
    color: var(--light-clr);
    background-color: var(--dark-clr);
  }
`;

export const Label = styled(StyledLabelDesktop)`
  align-self: flex-start;
  font-weight: 500;

  @media (min-width: 1024px) {
    font-size: 1.2rem;
    color: var(--dark-clr);
  }
`;

export const LabelInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledSelect = styled(Select)`
  min-width: 30rem;
  max-width: 30rem;
  color: var(--dark-clr);
  border: red;
`;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 2em 0;
`;

export const GreyishInput = React.forwardRef(({ id, name, type }, ref) => (
  <StyledGreyishInput ref={ref} id={id} name={name} type={type} required />
));

export const SpecContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
`;

export const SpecLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.5em;
  font-family: Quicksand;
  font-size: 1.1rem;
  font-weight: 500;
  color: #9b9b9b;
  background-color: #ecf0f2;
  border-radius: 4px;

  @media (min-width: 1024px) {
    color: var(--light-clr);
    background-color: var(--dark-clr);
  }
`;
