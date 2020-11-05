import React, { useState } from "react";
import styled from "styled-components";
import { useProject } from "../contexts/ProjectsContext";
import MediaQuery from "react-responsive";
import { Link, useHistory } from "react-router-dom";
import { StyledSmallButton } from "../components/buttons/SmallButton";
import AddProjectTemplateView from "./AddProjectTemplateView";
import { specDB } from "../mocks/SpecializationsData.js";
import AuthDesktopTemplate, {
  AuthDesktopMain,
} from "../pages/AuthDesktopTemplate";

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

const SpecLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20em;
  height: 2.5em;
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

const CheckBoxContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  justify-content: center;
  align-items: center;
  width: 80vw;
  gap: 2em;
`;
const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddProjectView2 = () => {
  const { project, setProject } = useProject();
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
        <Container>
          <SpecLabel>{label}</SpecLabel>
          <StyledCheckbox
            checked={checked}
            name={name}
            type="checkbox"
            onChange={(e) => handleSetState(e.target.name, e.target.checked)}
          />
        </Container>
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

    setProject({ ...project, team });

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
            sectionSubtitle={"Same kozaki"}
            step={"Krok 2 z 4"}
            children={
              <>
                <CheckBoxContainer>
                  <Checkboxes />
                </CheckBoxContainer>
                <Button onClick={clickHandler}>Dalej</Button>
              </>
            }
          />
        </AuthDesktopTemplate>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1024}>
        <AddProjectTemplateView
          heading={"Dodaj poszukiwanych przez Ciebie specjalistów"}
          sectionSubtitle={"Same kozaki"}
          children={
            <>
              <CheckBoxContainer>
                <Checkboxes />
              </CheckBoxContainer>
              <Link to="/pages/AddProjectView3">
                <Button onClick={clickHandler}>Dalej</Button>
              </Link>
            </>
          }
        ></AddProjectTemplateView>
      </MediaQuery>
    </>
  );
};

export default AddProjectView2;
