import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import MobileViewTemplate, {
  MobileFormWrapper,
} from "../../components/templates/MobileViewTemplate";
import SmallButton from "../../components/buttons/SmallButton";
import {
  Title,
  SpecElementContainer,
  ButtonContainer,
  SlideContainer,
  SlideItem,
  SlideItemActive,
  SpecElement,
} from "../../components/SignInUpElements";

const SignUpFull5Mobile = () => {
  return (
    <MobileViewTemplate>
      <MobileFormWrapper>
        <Title>Wybierz narzędzia</Title>
        <SpecElementContainer>
          <SpecElement />
          <SmallButton type={"submit"} label={"Dodaj"} />
        </SpecElementContainer>
        <ButtonContainer>
          <SmallButton type={"submit"} label={"Stwórz konto"} />
        </ButtonContainer>
      </MobileFormWrapper>
      <SlideContainer>
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
        <SlideItemActive>•</SlideItemActive>
      </SlideContainer>
    </MobileViewTemplate>
  );
};

export default SignUpFull5Mobile;
