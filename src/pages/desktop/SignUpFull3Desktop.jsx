import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DesktopViewWithCloudsTemplate from "../../components/templates/DesktopWiewWithCloudsTemplate";
import Input from "../../components/Input";
import { StyledLabelDesktop } from "../../components/Label";
import {
  DesktopOptionWrapper,
  Step,
  StepActive,
  StepDescription,
  StepsFooter,
  Title,
} from "../../components/SignInUpElements";

const InputLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  min-width: 50%;
  max-width: 50%;
`;

const StyledLabelDesktop2 = styled(StyledLabelDesktop)`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Label = ({ htmlFor, children }) => {
  return (
    <StyledLabelDesktop2 htmlFor={htmlFor}>{children}</StyledLabelDesktop2>
  );
};

const SignUpFull3Desktop = () => {
  return (
    <DesktopViewWithCloudsTemplate>
      <DesktopOptionWrapper>
        <Title>Pozwól się odnaleźć</Title>
        <InputLabelContainer>
          <Label htmlFor={"Portfolio"}>{"Portfolio"}</Label>
          <Input name={"Portfolio"} type={"text"} />
          <Label htmlFor={"Github"}>{"Github"}</Label>
          <Input name={"Github"} type={"text"} />
          <Label htmlFor={"Linkedin"}>{"Linkedin"}</Label>
          <Input name={"Linkedin"} type={"text"} />
          <Label htmlFor={"Dodaj"}>{"Dodaj zdjęcie"}</Label>
          <Input name={"Dodaj"} type={"text"} />
        </InputLabelContainer>
      </DesktopOptionWrapper>
      <StepsFooter>
        <StepDescription>Krok</StepDescription>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull2Desktop"
        >
          <Step>1</Step>
        </Link>
        <StepActive>2</StepActive>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull4Desktop"
        >
          <Step>3</Step>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull4Desktop"
        >
          <Step>4</Step>
        </Link>
      </StepsFooter>
    </DesktopViewWithCloudsTemplate>
  );
};

export default SignUpFull3Desktop;
