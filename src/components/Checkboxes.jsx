import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { specDB } from "../mocks/SpecializationsData.js";

const StyledCheckbox = styled.input`
  width: 2em;
  height: 2em;
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
  background-color: #e9e9e9;
  padding: 0.5em 1.2em;
  color: #b9b9b9;
  margin: 0em 0.5em 0.5em 0;
  border-radius: 4px;
`;

const CheckBoxContainer = styled.section`
  display: flex;
  margin-top: 1em;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;
const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Checkboxes = ({ projectsState, setProjectsState, initialState }) => {
  const [allSpec, setAllSpec] = useState({
    "Front-End Developer": false,
    "Back-End Developer": false,
    "UI Designer": false,
    "UX Designer": false,
    "SEO Specialist": false,
    "Scrum Master": false,
  });
  const handleSetState = (field, value) => {
    setAllSpec({
      ...allSpec,
      [field]: value,
    });
  };

  useEffect(() => {
    const chosenSpecializations = Object.keys(
      Object.fromEntries(
        Object.entries(allSpec).filter(([key, value]) => value === true)
      )
    );

    if (projectsState) {
      if (chosenSpecializations.length === 0) {
        setProjectsState(initialState);
      } else if (chosenSpecializations.length === 1) {
        const filteredProjects = projectsState.filter(({ team }) =>
          team.some(({ name }) => chosenSpecializations.includes(name))
        );

        setProjectsState(filteredProjects);
      } else if (chosenSpecializations.length >= 2) {
        const filteredProjects = projectsState.filter(({ team }) =>
          team.every(({ name }) => chosenSpecializations.includes(name))
        );

        setProjectsState(filteredProjects);
      }
    }
  }, [allSpec]);

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

  return <CheckBoxContainer>{CheckboxComponents}</CheckBoxContainer>;
};

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

export default Checkboxes;
