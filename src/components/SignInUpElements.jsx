import React from "react";
import styled from "styled-components";
import { toolsDB } from "../mocks/ToolsData";
import { specDB } from "../mocks/SpecializationsData";
import { techDB } from "../mocks/TechData";
import { fieldTagsDB } from "../mocks/FieldTagsData";
import { StyledButton } from "../components/buttons/Button";

export const Title = styled.h1`
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  font-size: 2.6rem;
  color: var(--dark-clr);
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

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 3.1rem;
  margin-bottom: 3.1rem;
  gap: 0.3rem;
`;

export const Option = styled.select`
  height: 3rem;
  width: 100%;
  padding-left: 0.8rem;
  border: none;
  background-color: #ecf0f2;
  color: #c8c8c8;
`;

export const ToolsElement = () => {
  const searchedToolsElements = toolsDB.map((el) => {
    console.log(el.label);
    return <option value={el.label}>{el.label}</option>;
  });
  return <Option>{searchedToolsElements}</Option>;
};

export const SpecsElement = () => {
  const searchedSpecElements = specDB.map((el) => {
    console.log(el.label);
    return <option value={el.label}>{el.label}</option>;
  });
  return <Option>{searchedSpecElements}</Option>;
};

export const TechElement = () => {
  const searchedTechElements = techDB.map((el) => {
    console.log(el.label);
    return <option value={el.label}>{el.label}</option>;
  });
  return <Option>{searchedTechElements}</Option>;
};

export const TagsElement = () => {
  const searchedTagsElements = fieldTagsDB.map((el) => {
    console.log(el.label);
    return <option value={el.label}>{el.label}</option>;
  });
  return <Option>{searchedTagsElements}</Option>;
};

export const DesktopOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  min-width: 60%;
  max-width: 60%;
  margin: auto 0;
  color: var(--dark-clr);
`;

export const StepsFooter = styled.footer`
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  font-size: 2.6rem;
  min-width: 60%;
  max-width: 60%;
  height: 5rem;
  gap: 1.2rem;
  color: var(--dark-clr);
`;

export const StepDescription = styled.p``;

export const Step = styled.p`
  display: inline-block;
  text-decoration: none;

  :visited {
    color: var(--dark-clr);
  }
`;

export const StepActive = styled(Step)`
  color: var(--accent-clr);
`;

export const StyledAddButton = styled(StyledButton)`
  padding: 0.8rem 2rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

export const AddButton = ({ type, label }) => {
  return <StyledAddButton type={type}>{label}</StyledAddButton>;
};
