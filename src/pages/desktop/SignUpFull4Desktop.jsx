import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DesktopViewWithCloudsTemplate from "../../components/templates/DesktopWiewWithCloudsTemplate";
import { StyledButton } from "../../components/buttons/Button";
import {
  AddButton,
  DesktopOptionWrapper,
  OptionContainer,
  TechElement,
  Step,
  StepActive,
  StepDescription,
  StepsFooter,
  Title,
} from "../../components/SignInUpElements";

const TechItemContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-self: flex-start;
  width: 60%;
`;

const StyledTechItem = styled(StyledButton)`
  padding: 0.8rem 2rem;
  font-size: 1.4rem;
`;

const TechItem = ({ type, label }) => {
  return <StyledTechItem type={type}>{label}</StyledTechItem>;
};

const SignUpFull4Desktop = () => {
  return (
    <DesktopViewWithCloudsTemplate>
      <DesktopOptionWrapper>
        <Title>Wybierz technologię</Title>
        <OptionContainer>
          <TechElement />
          <AddButton type={"submit"} label={"Dodaj"} />
        </OptionContainer>
        <TechItemContainer>
          <TechItem type="" label="Python" />
          <TechItem type="" label="JavaScript" />
          <TechItem type="" label="Java" />
        </TechItemContainer>
      </DesktopOptionWrapper>
      <StepsFooter>
        <StepDescription>Krok</StepDescription>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull2Desktop"
        >
          <Step>1</Step>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull3Desktop"
        >
          <Step>2</Step>
        </Link>
        <StepActive>3</StepActive>
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

export default SignUpFull4Desktop;
