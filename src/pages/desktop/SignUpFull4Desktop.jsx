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
  DesktopCenterRowButtonContainer,
  ChosenOptionContainer,
  ChosenOption,
  DesktopLinkButton,
} from "../../components/SignInUpElements";

const SignUpFull4Desktop = () => {
  return (
    <DesktopViewWithCloudsTemplate>
      <HalfDesktopFormWrapper>
        <Title>Wybierz technologie</Title>
        <OptionContainer>
          <TechElement />
          <AddButton type="submit" label="Dodaj" />
        </OptionContainer>
        <ChosenOptionContainer>
          <ChosenOption type="" label="Python" />
          <ChosenOption type="" label="JavaScript" />
          <ChosenOption type="" label="Java" />
        </ChosenOptionContainer>
        <DesktopCenterRowButtonContainer>
          <DesktopLinkButton to="/pages/SignUpFull5Desktop">
            Dalej
          </DesktopLinkButton>
        </DesktopCenterRowButtonContainer>
      </HalfDesktopFormWrapper>
      <DesktopSlideContainer>
        <SlideDescription>Krok</SlideDescription>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull1Desktop"
        >
          <SlideItem>1</SlideItem>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull2Desktop"
        >
          <SlideItem>2</SlideItem>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull3Desktop"
        >
          <SlideItem>3</SlideItem>
        </Link>
        <SlideItemActive>4</SlideItemActive>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull5Desktop"
        >
          <SlideItem>5</SlideItem>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull6Desktop"
        >
          <SlideItem>6</SlideItem>
        </Link>
      </DesktopSlideContainer>
    </DesktopViewWithCloudsTemplate>
  );
};

export default SignUpFull4Desktop;
