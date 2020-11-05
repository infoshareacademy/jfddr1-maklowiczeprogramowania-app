import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import MediaQuery from "react-responsive";
import { Link, useHistory } from "react-router-dom";
import { useProject } from "../contexts/ProjectsContext";
import { StyledSmallButton } from "../components/buttons/SmallButton";
import AddProjectTemplateView from "./AddProjectTemplateView";
import AuthDesktopTemplate, {
  AuthDesktopMain,
} from "../pages/AuthDesktopTemplate";
import { techDB } from "../mocks/TechData";

const Button = styled(StyledSmallButton)`
  width: 8em;
  margin: 2em 0.5em 0 0.5em;
  color: var(--dark-clr);
  background-color: var(--light-clr);
  @media (min-width: 1024px) {
    color: var(--light-clr);
    margin: 4em auto;
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
  border: red;
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

const AddProjectView3 = () => {
  const { project } = useProject();
  const history = useHistory();

  const SpecSelect = ({ name }) => {
    const [state, setState] = useState([]);
    const [disabled, setDisabled] = useState(false);

    const handleClick = (e) => {
      e.preventDefault();
      const found = project.team.find(
        (el) => el.name === String(e.target.name)
      );
      const techs = state.map((el) => el.label);
      found.tech.push(...techs);
      setDisabled(true);
    };
    return (
      <>
        <Form>
          <StyledSelect
            isMulti={true}
            name={name}
            placeholder="Wybierz technologie..."
            options={techDB}
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
    const SelectComponents = project.team.map((spec) => {
      return (
        <>
          <SpecContainer key={spec.name}>
            <SpecLabel key={spec.name}>{spec.name}</SpecLabel>
            <SpecSelect key={spec.name} name={spec.name} />
          </SpecContainer>
        </>
      );
    });
    return SelectComponents;
  };

  const clickHandler = () => {
    const err = project.team.map((spec) => {
      return spec.tech.length === 0 ? true : false;
    });

    if (err.some((el) => el === true)) {
      alert("You must choose at least one technology for each specialist!");
      return;
    }
    history.push("/pages/AddProjectView4");
  };

  return (
    <>
      <MediaQuery minDeviceWidth={1024}>
        <AuthDesktopTemplate>
          <AuthDesktopMain
            heading={"Dodaj technologie"}
            sectionSubtitle={
              "Określ które technologie wybrani przez Ciebie specjaliści mają znać"
            }
            step={"Krok 3 z 4"}
            children={
              <>
                <Container>
                  <SpecSelects />
                </Container>

                <Button onClick={clickHandler}>Dalej</Button>
              </>
            }
          />
        </AuthDesktopTemplate>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1024}>
        <AddProjectTemplateView
          heading={"Dodaj technologie"}
          sectionSubtitle={
            "Określ które technologie wybrani przez Ciebie specjaliści mają znać"
          }
          children={
            <>
              <Button onClick={clickHandler}>Dalej</Button>
            </>
          }
        ></AddProjectTemplateView>
      </MediaQuery>
    </>
  );
};

export default AddProjectView3;
