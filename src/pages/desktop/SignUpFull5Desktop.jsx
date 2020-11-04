import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DesktopViewWithCloudsTemplate from "../../components/templates/DesktopViewWithCloudsTemplate";
import { HalfDesktopFormWrapper } from "../../components/templates/DesktopViewTemplate";
import {
  AddButton,
  OptionContainer,
  ToolsElement,
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

const SignUpFull5Desktop = () => {
  return (
    <DesktopViewWithCloudsTemplate>
      <HalfDesktopFormWrapper>
        <Title>Wybierz narzędzia</Title>
        <OptionContainer>
          <ToolsElement />
          <AddButton type="submit" label="Dodaj" />
        </OptionContainer>
        <ChosenOptionContainer>
          <ChosenOption type="" label="Git" />
          <ChosenOption type="" label="Jira" />
          <ChosenOption type="" label="Option3" />
        </ChosenOptionContainer>
        <DesktopCenterRowButtonContainer>
          <DesktopLinkButton to="/pages/SignUpFull6Desktop">
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
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull4Desktop"
        >
          <SlideItem>4</SlideItem>
        </Link>
        <SlideItemActive>5</SlideItemActive>
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

export default SignUpFull5Desktop;
