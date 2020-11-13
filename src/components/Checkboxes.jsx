import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { specDB } from "../mocks/SpecializationsData.js";

const StyledCheckbox = styled.input`
  width: 2em;
  height: 2em;
  margin-left: 0.2rem;
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
  padding: 0.5em 1.2em;
  font-size: 0.9rem;
  font-weight: 600;
  color: #a7a7a7;
  background-color: #e9e9e9;
  border-radius: 4px;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 60%;
  margin: 1.5rem 0 3rem 0;
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
      } else if (chosenSpecializations.length > 2) {
        const filteredProjects = projectsState.filter(
          ({ team }) =>
            team.some(({ name }) => chosenSpecializations.includes(name)) ||
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
