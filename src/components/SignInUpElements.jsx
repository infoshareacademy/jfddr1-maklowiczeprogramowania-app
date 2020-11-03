import React from "react";
import styled from "styled-components";
import { toolsDB } from "../mocks/ToolsData";
import { specDB } from "../mocks/SpecializationsData";
import { techDB } from "../mocks/TechData";
import { fieldTagsDB } from "../mocks/FieldTagsData";
import { StyledButton } from "../components/buttons/Button";

// *********** OTHER ***********

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

export const StyledAddButton = styled(StyledButton)`
  padding: 0.8rem 2rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

export const AddButton = ({ type, label }) => {
  return <StyledAddButton type={type}>{label}</StyledAddButton>;
};

export const InputsAndLabelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  min-width: 65%;
  max-width: 65%;
`;

// *********** SIGNUP INFO ***********

export const SingUpInfoWrapper = styled.section`
  font-size: 0.8rem;
  margin: -1.25rem 0 0 0;
`;

export const SingUpInfoMark = styled.span`
  color: var(--accent-clr);
  font-size: 2.4rem;
`;

export const SingUpInfoParagraph = styled.p`
  margin: -1.25rem 0 1.6rem 0.6rem;
`;

// *********** BUTTON CONTAINERS ***********

export const RowButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem 2.8rem;
`;

export const CenterRowButtonContainer = styled(RowButtonContainer)`
  align-items: center;
  justify-content: center;
  margin: 2.5rem 0 0 0;
`;

export const ShiftedRowButtonContainer = styled(RowButtonContainer)`
  margin: -15px 0 0 0;
`;

export const ColumnButtonContainer = styled(RowButtonContainer)`
  flex-direction: column;
  gap: 0;
`;

// *********** ERROR MESSAGE ***********

export const ErrorMessageBackground = styled.div`
  margin-top: 2em;
  padding: 1em;
  border-radius: 0.25rem;
  background: #fbbb9a;
  color: #f49869;
`;

export const ErrorMessageParagraph = styled.p`
  font-size: 1.1rem;
`;

// *********** SLIDER ***********

export const MobileSlideContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  gap: 1.1rem;
  font-size: 2.1rem;
  font-weight: 600;
  color: var(--dark-clr);
`;

export const DesktopSlideContainer = styled(MobileSlideContainer)`
  align-items: flex-start;
  min-width: 60%;
  max-width: 60%;
  text-align: center;
  font-size: 2.1rem;
`;

export const SlideDescription = styled.p``;

export const SlideItem = styled.span`
  display: inline-block;
  text-decoration: none;

  :visited {
    color: var(--dark-clr);
  }
`;

export const SlideItemActive = styled(SlideItem)`
  color: var(--accent-clr);
`;

// *********** LIST WITH OPTIONS ***********

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
    return <option value={el.label}>{el.label}</option>;
  });
  return <Option>{searchedToolsElements}</Option>;
};

export const SpecsElement = () => {
  const searchedSpecElements = specDB.map((el) => {
    return <option value={el.label}>{el.label}</option>;
  });
  return <Option>{searchedSpecElements}</Option>;
};

export const TechElement = () => {
  const searchedTechElements = techDB.map((el) => {
    return <option value={el.label}>{el.label}</option>;
  });
  return <Option>{searchedTechElements}</Option>;
};

export const TagsElement = () => {
  const searchedTagsElements = fieldTagsDB.map((el) => {
    return <option value={el.label}>{el.label}</option>;
  });
  return <Option>{searchedTagsElements}</Option>;
};

// *********** CHOSEN OPTION ***********

export const ChosenOptionContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-self: flex-start;
  width: 60%;
`;

export const StyledChosenOption = styled(StyledButton)`
  padding: 0.8rem 2rem;
  font-size: 1.4rem;
`;

export const ChosenOption = ({ type, label }) => {
  return <StyledChosenOption type={type}>{label}</StyledChosenOption>;
};
