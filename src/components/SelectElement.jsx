import React from "react";
import styled from "styled-components";
import { getSelectOptionsElementDB } from "../mocks/SelectOptionsElement";

const Select = styled.select`
  background-color: #ecf0f2;
  width: 100%;
  height: 3rem;
  border: none;
  color: #c8c8c8;
`;

const SelectElement = () => {
  const searchedSelectOptionsElementDB = getSelectOptionsElementDB();
  const searchedSelectOptionsElementItems = searchedSelectOptionsElementDB.map(
    (el) => {
      console.log(el.option);
      return <option value={el.option}>{el.option}</option>;
    }
  );
  return <Select>{searchedSelectOptionsElementItems}</Select>;
};

export default SelectElement;
