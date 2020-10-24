import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { StyledSmallButton } from "../components/buttons/SmallButton";
import AddProjectTemplateView from "./AddProjectTemplateView";
import { Link } from "react-router-dom";
import { StyledInput } from "../components/Input";
import { StyledLabelMobile } from "../components/Label";
import { fieldTagsDB } from "../mocks/FieldTagsData.js";
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

const GreyishInput = styled(StyledInput)`
  background-color: #f2f5f6;
  width: 90%;
  height: 2.5em;
  @media (min-width: 1024px) {
    color: var(--light-clr);
    background-color: var(--dark-clr);
  }
`;

const BigGreyishInput = styled(GreyishInput)`
  height: 8em;
`;

const Label = styled(StyledLabelMobile)`
  font-weight: 500;
  align-self: flex-start;
  margin-left: 1.4em;
  @media (min-width: 1024px) {
    color: var(--dark-clr);
    font-size: 1.2rem;
  }
`;

const LabelInputWrapper = styled.div`
  display: flex;
  width: 80%;
  max-width: 450px;
  // border: 1px solid yellow;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 14px;
  margin: 0.2em;
  border-radius: 10px;
  background: #f2f5f6;
  color: #636363;
  font-size: 0.9rem;
`;

const TagContainer = styled.section`
  margin: 0.4em auto;
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  // justify-content: center;
  // align-items: center;
`;
const StepCounter = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--dark-clr);
  margin: 1em 0;
`;
const TagTemplate = (label) => {
  console.log(label);
  return (
    <>
      <Tag>{label.label}</Tag>
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: 1px solid red;
`;

const AddProjectView1 = () => {
  const fieldTagsData = fieldTagsDB;
  const FieldTagsComponents = fieldTagsData.map(({ label }) => {
    return (
      <>
        <TagTemplate label={label} />
      </>
    );
  });
  return (
    <>
      <MediaQuery minDeviceWidth={1024}>
        <AuthDesktopTemplate>
          children=
          {
            <>
              <Heading>Dodaj podstawowe informacje</Heading>
              <Paragraph>Opisz swój projekt</Paragraph>
              <Form>
                <LabelInputWrapper>
                  <Label>Tytuł</Label>
                  <GreyishInput />
                </LabelInputWrapper>
                <LabelInputWrapper>
                  <Label>Grafika projektu</Label>
                  <GreyishInput />
                </LabelInputWrapper>

                <LabelInputWrapper>
                  <Label>Opis projektu</Label>
                  <BigGreyishInput />
                </LabelInputWrapper>
              </Form>
              <TagContainer> {FieldTagsComponents}</TagContainer>
              <Link to="/pages/AddProjectView2">
                <Button>Dalej</Button>
              </Link>
              <StepCounter>Krok 1 z 4</StepCounter>
            </>
          }
        </AuthDesktopTemplate>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1024}>
        <AddProjectTemplateView
          children={
            <>
              <Heading>Dodaj podstawowe informacje</Heading>
              <Paragraph>Opisz swój projekt</Paragraph>
              <Form>
                <LabelInputWrapper>
                  <Label>Tytuł</Label>
                  <GreyishInput />
                </LabelInputWrapper>
                <LabelInputWrapper>
                  <Label>Grafika projektu</Label>
                  <GreyishInput />
                </LabelInputWrapper>

                <LabelInputWrapper>
                  <Label>Opis projektu</Label>
                  <BigGreyishInput />
                </LabelInputWrapper>
              </Form>
              <TagContainer> {FieldTagsComponents}</TagContainer>
              <Link to="/pages/AddProjectView2">
                <Button>Dalej</Button>
              </Link>
            </>
          }
        ></AddProjectTemplateView>
      </MediaQuery>
    </>
  );
};

export default AddProjectView1;
