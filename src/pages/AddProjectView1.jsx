import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { StyledSmallButton } from "../components/SmallButton";
import AddProjectTemplateView from "./AddProjectTemplateView";
import { StyledInput } from "../components/Input";
import { StyledLabel } from "../components/Label";
import { fieldTagsDB } from "../mocks/FieldTagsData.js";

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
  background-color: var(--light-clr);
  color: var(--dark-clr);
  width: 8em;
  margin: 2em 0.5em 0 0.5em;
`;

const GreyishInput = styled(StyledInput)`
  background-color: #f2f5f6;
  width: 90%;

  height: 2.5em;
`;

const BigGreyishInput = styled(GreyishInput)`
  height: 8em;
`;

const Label = styled(StyledLabel)`
  font-weight: 500;
  align-self: flex-start;
  margin-left: 1.4em;
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

            <Button>Dalej</Button>
          </>
        }
      ></AddProjectTemplateView>
    </>
  );
};

export default AddProjectView1;
