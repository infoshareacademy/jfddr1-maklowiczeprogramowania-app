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

const SignUpFull2Desktop = () => {
  return (
    <DesktopViewWithCloudsTemplate>
      <DesktopOptionWrapper>
        <Title>Dodaj podstawowe informacje</Title>
        <InputLabelContainer>
          <Label htmlFor={"Imię"}>{"Imię"}</Label>
          <Input name={"Imię"} type={"text"} />
          <Label htmlFor={"Nazwisko"}>{"Nazwisko"}</Label>
          <Input name={"Nazwisko"} type={"text"} />
          <Label htmlFor={"Email"}>{"Email"}</Label>
          <Input name={"Email"} type={"text"} />
          <Label htmlFor={"Hasło"}>{"Hasło"}</Label>
          <Input name={"Hasło"} type={"text"} />
        </InputLabelContainer>
      </DesktopOptionWrapper>
      <StepsFooter>
        <StepDescription>Krok</StepDescription>
        <StepActive>1</StepActive>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull3Desktop"
        >
          <Step>2</Step>
        </Link>
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

export default SignUpFull2Desktop;
