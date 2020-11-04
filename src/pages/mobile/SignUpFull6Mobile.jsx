import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import MobileViewTemplate, {
  MobileFormWrapper,
} from "../../components/templates/MobileViewTemplate";
import SmallButton from "../../components/buttons/SmallButton";
import {
  Title,
  OptionContainer,
  CenterRowButtonContainer,
  MobileSlideContainer,
  SlideItem,
  SlideItemActive,
  TagsElement,
} from "../../components/SignInUpElements";

const SignUpFull6Mobile = () => {
  return (
    <MobileViewTemplate>
      <MobileFormWrapper>
        <Title>Wybierz obszar swoich zainteresowań</Title>
        <OptionContainer>
          <TagsElement />
          <SmallButton type="submit" label="Dodaj" />
        </OptionContainer>
        <CenterRowButtonContainer>
          <SmallButton type="submit" label="Stwórz konto" />
        </CenterRowButtonContainer>
      </MobileFormWrapper>
      <MobileSlideContainer>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull1Mobile"
        >
          <SlideItem>•</SlideItem>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull2Mobile"
        >
          <SlideItem>•</SlideItem>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull3Mobile"
        >
          <SlideItem>•</SlideItem>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull4Mobile"
        >
          <SlideItem>•</SlideItem>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull5Mobile"
        >
          <SlideItem>•</SlideItem>
        </Link>
        <SlideItemActive>•</SlideItemActive>
      </MobileSlideContainer>
    </MobileViewTemplate>
  );
};

export default SignUpFull6Mobile;
