import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import { StyledSmallButton } from "../components/SmallButton";
import AddProjectTemplateView from "./AddProjectTemplateView";
import { specDB } from "../mocks/SpecializationsData.js";
import AuthDesktopTemplate from "../pages/AuthDesktopTemplate";
const Heading = styled.h1`
  color: var(--text-color);
  font-size: 1.6rem;

  @media (min-width: 1024px) {
    color: var(--dark-clr);
  }
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 0.5em;
  @media (min-width: 1024px) {
    color: var(--dark-clr);
    font-size: 1.2rem;
  }
`;
const Button = styled(StyledSmallButton)`
  background-color: var(--light-clr);
  color: var(--dark-clr);
  width: 8em;
  margin: 2em 0.5em 0 0.5em;
  @media (min-width: 1024px) {
    color: var(--light-clr);
    background-color: var(--dark-clr);
  }
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
  @media (min-width: 1024px) {
    color: var(--light-clr);
    background-color: var(--dark-clr);
  }
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
      <MediaQuery minDeviceWidth={1024}>
        <AuthDesktopTemplate>
          children=
          {
            <>
              <Heading>Dodaj poszukiwanych</Heading>
              <Paragraph>Wybierz potrzebnych specjalistów</Paragraph>
              <SpecComponentsContainer>
                {SpecComponents}
              </SpecComponentsContainer>
              <Link to="/pages/AddProjectView3">
                <Button>Dalej</Button>
              </Link>
            </>
          }
        </AuthDesktopTemplate>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1024}>
        <AddProjectTemplateView
          children={
            <>
              <Heading>Dodaj poszukiwanych</Heading>
              <Paragraph>Wybierz potrzebnych specjalistów</Paragraph>
              <SpecComponentsContainer>
                {SpecComponents}
              </SpecComponentsContainer>
              <Link to="/pages/AddProjectView3">
                <Button>Dalej</Button>
              </Link>
            </>
          }
        ></AddProjectTemplateView>
      </MediaQuery>
    </>
  );
};

export default AddProjectView2;
