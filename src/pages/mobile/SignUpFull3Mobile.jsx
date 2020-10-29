import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SelectElement from "../../components/SignInUpElements";
import MobileViewTemplate, {
  MobileFormWrapper,
} from "../../components/templates/MobileViewTemplate";
import SmallButton from "../../components/buttons/SmallButton";
import {
  Title,
  ButtonContainer,
  SlideContainer,
  SlideItem,
  SlideItemActive,
} from "../../components/SignInUpElements";

const SignUpFull3Mobile = () => {
  return (
    <MobileViewTemplate>
      <MobileFormWrapper>
        <Title>Wybierz specjalizację</Title>
        <SelectElement />
        <ButtonContainer>
          <SmallButton type={"submit"} label={"Dalej"} />
        </ButtonContainer>
      </MobileFormWrapper>
      <SlideContainer>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull2Mobile"
        >
          <SlideItem>•</SlideItem>
        </Link>
        <SlideItemActive>•</SlideItemActive>
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
      </SlideContainer>
    </MobileViewTemplate>
  );
};

export default SignUpFull3Mobile;
