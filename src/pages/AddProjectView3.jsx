import React, { useState } from "react";
import MediaQuery from "react-responsive";
import { useHistory } from "react-router-dom";
import { useProject } from "../contexts/ProjectsContext";
import AddProjectViewTemplate from "../components/templates/AddProjectViewTemplate";
import AuthDesktopTemplate, {
  AuthDesktopMain,
} from "../components/templates/AuthDesktopTemplate";
import { techDB } from "../mocks/TechData";
import {
  Button,
  SpecLabel,
  FormWrapper,
  StyledSelect,
  SelectButton,
  TagContainer,
} from "../components/AddProjectViewElements";

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
        <StyledSelect
          isMulti={true}
          name={name}
          placeholder="Wybierz technologie..."
          options={techDB}
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
                <FormWrapper>
                  <SpecSelects />
                  <Button onClick={clickHandler}>Dalej</Button>
                </FormWrapper>
              </>
            }
          />
        </AuthDesktopTemplate>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1024}>
        <AddProjectViewTemplate
          heading={"Dodaj technologie"}
          sectionSubtitle={
            "Określ które technologie wybrani przez Ciebie specjaliści mają znać"
          }
          children={
            <>
              <Button onClick={clickHandler}>Dalej</Button>
            </>
          }
        ></AddProjectViewTemplate>
      </MediaQuery>
    </>
  );
};

export default AddProjectView3;
