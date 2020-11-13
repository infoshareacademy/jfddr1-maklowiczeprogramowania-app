import React, { useState } from "react";
import MediaQuery from "react-responsive";
import { useHistory } from "react-router-dom";
import { useProject } from "../contexts/ProjectsContext";
import { useAuth } from "../contexts/AuthContext";
import AddProjectViewTemplate from "../components/templates/AddProjectViewTemplate";
import AuthDesktopTemplate, {
  AuthDesktopMain,
} from "../components/templates/AuthDesktopTemplate";
import { toolsDB } from "../mocks/ToolsData";
import {
  Button,
  SpecLabel,
  FormWrapper,
  StyledSelect,
  SelectButton,
  TagContainer,
} from "../components/AddProjectViewElements";
import { firebaseProjectsDB } from "../firebase/ProjectsDB";
import * as firebase from "firebase/app";
import "firebase/firestore";

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
      <StyledSelect
        isMulti={true}
        name={name}
        placeholder="Wybierz narzędzia..."
        options={toolsDB}
        onChange={setState}
        isDisabled={disabled}
      />
      <SelectButton onClick={handleClick} name={name}>
        Zatwierdź
      </SelectButton>
    </>
  );
};

const SpecSelects = () => {
  const { project } = useProject();

  const SelectComponents = project.team.map((spec) => {
    return (
      <>
        <SpecLabel key={spec.name}>{spec.name}</SpecLabel>
        <TagContainer key={spec.name}>
          <SpecSelect key={spec.name} name={spec.name} />
        </TagContainer>
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
                <FormWrapper>
                  <SpecSelects />
                  <Button onClick={clickHandler}>Zatwierdź projekt</Button>
                </FormWrapper>
              </>
            }
          ></AuthDesktopMain>
        </AuthDesktopTemplate>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1024}>
        <AddProjectViewTemplate
          heading={"Dodaj narzędzia"}
          sectionSubtitle={
            "Określ które narzędzia wybrani przez Ciebie specjaliści mają znać"
          }
          children={
            <>
              <Button onClick={clickHandler}>Zatwierdź projekt</Button>
            </>
          }
        ></AddProjectViewTemplate>
      </MediaQuery>
    </>
  );
};

export default AddProjectView4;
