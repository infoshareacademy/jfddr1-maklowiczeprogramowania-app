import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DesktopViewWithCloudsTemplate from "../../components/templates/DesktopViewWithCloudsTemplate";
import { HalfDesktopFormWrapper } from "../../components/templates/DesktopViewTemplate";
import {
  AddButton,
  OptionContainer,
  TagsElement,
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

const SignUpFull6Desktop = () => {
  return (
    <DesktopViewWithCloudsTemplate>
      <HalfDesktopFormWrapper>
        <Title>Wybierz obszar swoich zainteresowań</Title>
        <OptionContainer>
          <TagsElement />
          <AddButton type="submit" label="Dodaj" />
        </OptionContainer>
        <DesktopCenterRowButtonContainer>
          <DesktopLinkButton to="/pages/SignUpFull7DoneDesktop">
            Załóż konto
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
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull5Desktop"
        >
          <SlideItem>5</SlideItem>
        </Link>
        <SlideItemActive>6</SlideItemActive>
      </DesktopSlideContainer>
    </DesktopViewWithCloudsTemplate>
  );
};

export default SignUpFull6Desktop;
