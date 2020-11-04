import React, { useState } from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import Select from "react-select";
import { useProject } from "../contexts/ProjectsContext";
import { Link, useHistory } from "react-router-dom";
import { StyledSmallButton } from "../components/buttons/SmallButton";
import { StyledInput } from "../components/Input";
import { StyledLabelDesktop } from "../components/Label";
import { fieldTagsDB } from "../mocks/FieldTagsData.js";
import AddProjectTemplateView from "./AddProjectTemplateView";
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
  width: 8em;
  margin: 2em 0.5em 0 0.5em;
  color: var(--dark-clr);
  background-color: var(--light-clr);
  @media (min-width: 1024px) {
    color: var(--light-clr);
    background-color: var(--dark-clr);
  }
`;

const SelectButton = styled(Button)`
margin 0 1em;
`;

const GreyishInput = styled(StyledInput)`
  width: 90%;
  height: 2.5em;
  color: var(--dark-clr);
  background-color: #f2f5f6;

  @media (min-width: 1024px) {
    color: var(--light-clr);
    background-color: var(--dark-clr);
  }
`;

const BigGreyishInput = styled(GreyishInput)`
  height: 8em;
`;

const Label = styled(StyledLabelDesktop)`
  font-weight: 500;
  align-self: flex-start;
  margin-left: 1.4em;
  font-weight: 500;
  @media (min-width: 1024px) {
    font-size: 1.2rem;
    color: var(--dark-clr);
  }
`;

const LabelInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 450px;
`;

const TagContainer = styled.section`
  display: flex;
  margin: 2em 0;
  width: 100%;
  align-items: center;
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
`;
const Input = React.forwardRef(({ id, name, type }, ref) => (
  <GreyishInput ref={ref} id={id} name={name} type={type} required />
));

const AddProjectView1 = () => {
  const history = useHistory();
  const { project, setProject } = useProject();
  const [tags, setTags] = useState([]);
  const titleRef = React.createRef();
  const fileRef = React.createRef();
  const descriptionRef = React.createRef();
  const SpecSelect = ({ name }) => {
    const [disabled, setDisabled] = useState(false);
    const [tagsState, setTagsState] = useState([]);

    const handleClick = (e) => {
      e.preventDefault();
      const tags = tagsState.map((el) => el.label);
      setTags(tags);
      setDisabled(true);
    };
    return (
      <>
        <StyledSelect
          isMulti={true}
          placeholder="Wybierz tagi..."
          name={name}
          options={fieldTagsDB}
          onChange={setTagsState}
          isDisabled={disabled}
        />
        <SelectButton name={name} onClick={handleClick}>
          Zatwierdź
        </SelectButton>
      </>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let title = titleRef.current.value;
    let file = fileRef.current.value;
    let description = descriptionRef.current.value;
    setProject({ title, file, description, tags });
    console.log(project);
    history.push("/pages/AddProjectView2");
  };

  return (
    <>
      <MediaQuery minDeviceWidth={1024}>
        <AuthDesktopTemplate
          heading={"Dodaj podstawowe informacje"}
          sectionSubtitle={"Opisz swój projekt"}
          step={"Krok 1 z 4"}
          children={
            <>
              <Form onSubmit={handleSubmit}>
                <LabelInputWrapper>
                  <Label>Tytuł</Label>
                  <Input
                    ref={titleRef}
                    id={"title"}
                    name={"title"}
                    type={"text"}
                    required
                  />
                </LabelInputWrapper>
                <LabelInputWrapper>
                  <Label>Grafika projektu</Label>
                  <Input
                    ref={fileRef}
                    id={"upload"}
                    name={"upload"}
                    type={"file"}
                    accept={"image/png, image/jpeg"}
                  />
                </LabelInputWrapper>
                <LabelInputWrapper>
                  <Label>Opis projektu</Label>
                  <Input
                    ref={descriptionRef}
                    id={"description"}
                    name={"description"}
                    type={"text"}
                    required
                  />
                </LabelInputWrapper>

                <TagContainer>
                  <SpecSelect />
                </TagContainer>

                <Button type="submit">Dalej</Button>
              </Form>
            </>
          }
        ></AuthDesktopTemplate>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1024}>
        <AddProjectTemplateView
          heading={"Dodaj podstawowe informacje"}
          sectionSubtitle={"Opisz swój projekt"}
          children={
            <>
              <Form>
                <LabelInputWrapper>
                  <Label>Tytuł</Label>
                  <GreyishInput required type="password" />
                </LabelInputWrapper>
                <LabelInputWrapper>
                  <Label>Grafika projektu</Label>
                  <GreyishInput required />
                </LabelInputWrapper>
                <LabelInputWrapper>
                  <Label>Opis projektu</Label>
                  <BigGreyishInput required />
                </LabelInputWrapper>
              </Form>

              <Button>Dalej</Button>
            </>
          }
        ></AddProjectTemplateView>
      </MediaQuery>
    </>
  );
};

export default AddProjectView1;
