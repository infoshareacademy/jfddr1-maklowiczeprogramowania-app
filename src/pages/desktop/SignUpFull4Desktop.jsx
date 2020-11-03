import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DesktopViewWithCloudsTemplate from "../../components/templates/DesktopViewWithCloudsTemplate";
import { HalfDesktopFormWrapper } from "../../components/templates/DesktopViewTemplate";
import {
  AddButton,
  OptionContainer,
  TechElement,
  SlideItem,
  SlideItemActive,
  SlideDescription,
  DesktopSlideContainer,
  Title,
  CenterRowButtonContainer,
  ChosenOptionContainer,
  ChosenOption,
} from "../../components/SignInUpElements";
import MediumButton from "../../components/buttons/MediumButton";

const SignUpFull4Desktop = () => {
  return (
    <DesktopViewWithCloudsTemplate>
      <HalfDesktopFormWrapper>
        <Title>Wybierz technologie</Title>
        <OptionContainer>
          <TechElement />
          <AddButton type={"submit"} label={"Dodaj"} />
        </OptionContainer>
        <ChosenOptionContainer>
          <ChosenOption type="" label="Python" />
          <ChosenOption type="" label="JavaScript" />
          <ChosenOption type="" label="Java" />
        </ChosenOptionContainer>
        <CenterRowButtonContainer>
          <MediumButton type={"submit"} label={"Dalej"} />
        </CenterRowButtonContainer>
      </HalfDesktopFormWrapper>
      <DesktopSlideContainer>
        <SlideDescription>Krok</SlideDescription>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull2Desktop"
        >
          <SlideItem>1</SlideItem>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull3Desktop"
        >
          <SlideItem>2</SlideItem>
        </Link>
        <SlideItemActive>3</SlideItemActive>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull5Desktop"
        >
          <SlideItem>4</SlideItem>
        </Link>
      </DesktopSlideContainer>
    </DesktopViewWithCloudsTemplate>
  );
};

export default SignUpFull4Desktop;
