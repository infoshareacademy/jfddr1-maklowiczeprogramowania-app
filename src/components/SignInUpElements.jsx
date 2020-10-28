import React from "react";
import styled from "styled-components";
import { getSelectOptionsElementDB } from "../mocks/SelectOptionsElement";

export const Title = styled.h1`
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  font-size: 2.6rem;
`;

export const SmallerTitle = styled(Title)`
  font-size: 2rem;
`;

export const Description = styled.p`
  display: inline-block;
  margin: 0.3rem 0 1.9rem 0;
`;

export const StyledAnchor = styled.a`
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  color: var(--accent-clr);
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.9rem;
  gap: 1.9rem;
`;

export const SlideContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  margin-top: 1rem;
  gap: 1.2rem;
`;

export const SlideItem = styled.span`
  display: inline-block;
  text-decoration: none;
  font-size: 3rem;

  :visited {
    color: var(--dark-clr);
  }
`;

export const SlideItemActive = styled(SlideItem)`
  color: var(--accent-clr);
`;

export const SelectElementContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3.1rem;
  margin-bottom: 3.1rem;
  gap: 0.3rem;
`;

const Select = styled.select`
  height: 3rem;
  width: 100%;
  border: none;
  background-color: #ecf0f2;
  color: #c8c8c8;
`;

export const SelectElement = () => {
  const searchedSelectOptionsElementDB = getSelectOptionsElementDB();
  const searchedSelectOptionsElementItems = searchedSelectOptionsElementDB.map(
    (el) => {
      console.log(el.option);
      return <option value={el.option}>{el.option}</option>;
    }
  );
  return <Select>{searchedSelectOptionsElementItems}</Select>;
};
