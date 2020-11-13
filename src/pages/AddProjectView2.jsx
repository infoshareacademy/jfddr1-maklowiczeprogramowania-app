import React, { useState } from "react";
import styled from "styled-components";
import { useProject } from "../contexts/ProjectsContext";
import MediaQuery from "react-responsive";
import { Link, useHistory } from "react-router-dom";
import AddProjectViewTemplate from "../components/templates/AddProjectViewTemplate";
import { specDB } from "../mocks/SpecializationsData.js";
import AuthDesktopTemplate, {
  AuthDesktopMain,
} from "../components/templates/AuthDesktopTemplate";
import {
  Button,
  FormWrapper,
  SpecContainer,
  SpecLabel,
} from "../components/AddProjectViewElements";

const StyledCheckbox = styled.input`
  width: 5em;
  height: 2.5em;
  background-color: var(--dark-clr);
  border-radius: 4px;

  @media (min-width: 1024px) {
    color: var(--light-clr);
    background-color: var(--dark-clr);
    :checked {
      background-color: var(--light-clr);
    }
  }
`;

const AddProjectView2 = () => {
  const { project, setProject, projectsState } = useProject();
  const history = useHistory();
  const [allSpec, setAllSpec] = useState({
    "Front-End Developer": false,
    "Back-End Developer": false,
    "UI Designer": false,
    "UX Designer": false,
    "SEO Specialist": false,
    "Scrum Master": false,
  });
  const [team, setTeam] = useState([]);
  const Checkbox = ({ name, handleSetState, checked, label }) => {
    return (
      <>
        <SpecContainer>
          <SpecLabel>{label}</SpecLabel>
          <StyledCheckbox
            checked={checked}
            name={name}
            type="checkbox"
            onChange={(e) => handleSetState(e.target.name, e.target.checked)}
          />
        </SpecContainer>
      </>
    );
  };

  const Checkboxes = () => {
    const handleSetState = (field, value) => {
      setAllSpec({
        ...allSpec,
        [field]: value,
      });
    };

    const CheckboxComponents = specDB.map(({ label }) => {
      return (
        <Checkbox
          handleSetState={handleSetState}
          name={label}
          checked={allSpec[label]}
          key={label}
          label={label}
        />
      );
    });

    return <>{CheckboxComponents}</>;
  };

  const clickHandler = (e) => {
    e.preventDefault();
    let teamSpecLabels = Object.keys(
      Object.fromEntries(
        Object.entries(allSpec).filter(([key, value]) => value === true)
      )
    );
    teamSpecLabels.forEach((specLabel) => {
      team.push({
        name: specLabel,
        tech: [],
        tools: [],
      });
    });
    let id = projectsState.length + 1;
    setProject({ ...project, team, id });

    function isFalse(item) {
      return item === false;
    }

    if (Object.values(allSpec).every(isFalse)) {
      alert("You must choose at least one specialist!");
      return;
    }

    history.push("/pages/AddProjectView3");
  };

  return (
    <>
      <MediaQuery minDeviceWidth={1024}>
        <AuthDesktopTemplate>
          <AuthDesktopMain
            heading={"Dodaj poszukiwanych przez Ciebie specjalistów"}
            sectionSubtitle={"Zaznacz kogo poszukujesz"}
            step={"Krok 2 z 4"}
            children={
              <>
                <FormWrapper>
                  <Checkboxes />
                  <Button onClick={clickHandler}>Dalej</Button>
                </FormWrapper>
              </>
            }
          />
        </AuthDesktopTemplate>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1024}>
        <AddProjectViewTemplate
          heading={"Dodaj poszukiwanych przez Ciebie specjalistów"}
          sectionSubtitle={"Zaznacz kogo poszukujesz"}
          children={
            <>
              <FormWrapper>
                <Checkboxes />
              </FormWrapper>
              <Link to="/pages/AddProjectView3">
                <Button onClick={clickHandler}>Dalej</Button>
              </Link>
            </>
          }
        ></AddProjectViewTemplate>
      </MediaQuery>
    </>
  );
};

export default AddProjectView2;
