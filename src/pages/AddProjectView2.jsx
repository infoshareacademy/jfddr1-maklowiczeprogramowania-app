import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { StyledSmallButton } from "../components/SmallButton";
import AddProjectTemplateView from "./AddProjectTemplateView";
import { specDB } from "../mocks/SpecializationsData.js";
const Heading = styled.h1`
  color: var(--text-color);
  font-size: 1.6rem;
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 0.5em;
`;

const Button = styled(StyledSmallButton)`
  width: 8em;
  margin: 2em 0.5em 0 0.5em;
  color: var(--dark-clr);
  background-color: var(--light-clr);
`;

const Spec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 400px;
  height: 2.5em;
  margin-top: 2em;
  font-family: Quicksand;
  font-size: 1.1rem;
  font-weight: 500;
  color: #9b9b9b;
  background-color: #ecf0f2;
  border-radius: 4px;
`;
const SpecComponentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 80vw;
  align-items: center;
  justify-content: center;
`;
const SpecComponent = (label) => {
  return <Spec>{label.label}</Spec>;
};

const AddProjectView2 = () => {
  const SpecComponents = specDB.map(({ label }) => {
    return <SpecComponent label={label} />;
  });

  return (
    <>
      <AddProjectTemplateView
        children={
          <>
            <Heading>Dodaj poszukiwanych</Heading>
            <Paragraph>Wybierz potrzebnych specjalistów</Paragraph>
            <SpecComponentsContainer>{SpecComponents}</SpecComponentsContainer>
            <Button>Dalej</Button>
          </>
        }
      ></AddProjectTemplateView>
    </>
  );
};

export default AddProjectView2;
