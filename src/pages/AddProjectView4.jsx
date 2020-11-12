import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import MediaQuery from "react-responsive";
import { useHistory } from "react-router-dom";
import { useProject } from "../contexts/ProjectsContext";
import { useAuth } from "../contexts/AuthContext";
import { StyledSmallButton } from "../components/buttons/SmallButton";
import AddProjectTemplateView from "./AddProjectTemplateView";
import AuthDesktopTemplate, {
  AuthDesktopMain,
} from "../pages/AuthDesktopTemplate";
import { toolsDB } from "../mocks/ToolsData";
import { firebaseProjectsDB } from "../firebase/ProjectsDB";
import * as firebase from "firebase/app";
import "firebase/firestore";

const Button = styled(StyledSmallButton)`
  width: 8em;
  margin: 2em 0.5em 0 0.5em;
  color: var(--dark-clr);
  background-color: var(--light-clr);
  @media (min-width: 1024px) {
    margin: 4em auto;
    color: var(--light-clr);
    background-color: var(--dark-clr);
  }
`;

const SpecLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5em;
  margin-top: 2em;
  width: 20em;
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

const StyledSelect = styled(Select)`
  color: var(--dark-clr);
`;

const SpecContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;
const Container = styled.section`
  display: flex;
  gap: 40px;
`;

const Form = styled.form`
  width: 20em;
`;

const SpecSelect = ({ name }) => {
  const [state, setState] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const { project } = useProject();
  const handleClick = (e) => {
    e.preventDefault();
    const found = project.team.find((el) => el.name === String(e.target.name));
    const tools = state.map((el) => el.label);
    found.tools.push(...tools);
    setDisabled(true);
  };
  return (
    <>
      <Form>
        <StyledSelect
          isMulti={true}
          name={name}
          placeholder="Wybierz narzędzia..."
          options={toolsDB}
          onChange={setState}
          isDisabled={disabled}
        />
        <Button onClick={handleClick} name={name}>
          Zatwierdź
        </Button>
      </Form>
    </>
  );
};

const SpecSelects = () => {
  const { project } = useProject();

  const SelectComponents = project.team.map((spec) => {
    return (
      <>
        <SpecContainer>
          <SpecLabel>{spec.name}</SpecLabel>
          <SpecSelect name={spec.name} />
        </SpecContainer>
      </>
    );
  });
  return SelectComponents;
};

const AddProjectView4 = () => {
  const { project, setProject } = useProject();
  const { currentUser } = useAuth();

  const history = useHistory();
  const clickHandler = () => {
    const err = project.team.map((spec) => {
      return spec.tools.length === 0 ? true : false;
    });

    if (err.some((el) => el === true)) {
      alert("You must choose at least one tool for each specialist!");
      return;
    }

    setProject({ ...project });
    firebaseProjectsDB.add(project);

    // Projekty pojedynczego usera, projekt musi być dodawany do jego biblioteki
    firebase.firestore().collection(currentUser.uid).add(project);

    history.push("/pages/AddProjectViewDone");
  };

  return (
    <>
      <MediaQuery minDeviceWidth={1024}>
        <AuthDesktopTemplate>
          <AuthDesktopMain
            heading={"Dodaj narzędzia"}
            sectionSubtitle={
              "Określ które narzędzia wybrani przez Ciebie specjaliści mają znać"
            }
            step={"Krok 4 z 4"}
            children={
              <>
                <Container>
                  <SpecSelects />
                </Container>
                <Button onClick={clickHandler}>Zatwierdź projekt</Button>
              </>
            }
          ></AuthDesktopMain>
        </AuthDesktopTemplate>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1024}>
        <AddProjectTemplateView
          heading={"Dodaj narzędzia"}
          sectionSubtitle={
            "Określ które narzędzia wybrani przez Ciebie specjaliści mają znać"
          }
          children={
            <>
              <Button onClick={clickHandler}>Zatwierdź projekt</Button>
            </>
          }
        ></AddProjectTemplateView>
      </MediaQuery>
    </>
  );
};

export default AddProjectView4;
