import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { LabelMobile } from "../../components/Label";
import MobileViewTemplate, {
  MobileFormWrapper,
} from "../../components/templates/MobileViewTemplate";
import {
  MobileCenterRowButtonContainer,
  SmallerTitle,
  MobileSlideContainer,
  SlideItem,
  SlideItemActive,
  MobileLinkButton,
} from "../../components/SignInUpElements";

const SignUpFull2Mobile = () => {
  return (
    <MobileViewTemplate>
      <MobileFormWrapper>
        <SmallerTitle>Pozwól się odnaleźć</SmallerTitle>
        <LabelMobile htmlFor="Portfolio">{"Portfolio"}</LabelMobile>
        <Input name="Portfolio" type="text" />
        <LabelMobile htmlFor="Github">{"Github"}</LabelMobile>
        <Input name="Github" type="text" />
        <LabelMobile htmlFor="Linkedin">{"Linkedin"}</LabelMobile>
        <Input name="Linkedin" type="text" />
        <LabelMobile htmlFor="Dodaj">{"Dodaj zdjęcie"}</LabelMobile>
        <Input name="Dodaj" type="text" />
        <MobileCenterRowButtonContainer>
          <MobileLinkButton to="/pages/SignUpFull3Mobile">
            Dalej
          </MobileLinkButton>
        </MobileCenterRowButtonContainer>
      </MobileFormWrapper>
      <MobileSlideContainer>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull1Mobile"
        >
          <SlideItem>•</SlideItem>
        </Link>
        <SlideItemActive>•</SlideItemActive>
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
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull6Mobile"
        >
          <SlideItem>•</SlideItem>
        </Link>
      </MobileSlideContainer>
    </MobileViewTemplate>
  );
};

export default SignUpFull2Mobile;
