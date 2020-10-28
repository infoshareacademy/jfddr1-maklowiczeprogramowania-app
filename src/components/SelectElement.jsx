import React from "react";
import styled from "styled-components";

const Select = styled.select`
  background-color: #ecf0f2;
  width: 100%;
  height: 3rem;
  border: none;
  color: #c8c8c8;
`;

const SelectElement = ({ options }) => {
  console.log(options);
  return (
    <Select name="Wybierz Narzędzia">
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </Select>
  );
};

export default SelectElement;
