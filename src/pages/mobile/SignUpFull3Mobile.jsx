import React from "react";
import { Link } from "react-router-dom";
import MobileViewTemplate, {
  MobileFormWrapper,
} from "../../components/templates/MobileViewTemplate";
import SmallButton from "../../components/buttons/SmallButton";
import {
  SmallerTitle,
  MobileCenterRowButtonContainer,
  MobileSlideContainer,
  SlideItem,
  SlideItemActive,
  OptionContainer,
  SpecsElement,
  MobileLinkButton,
} from "../../components/SignInUpElements";

const SignUpFull3Mobile = () => {
  return (
    <MobileViewTemplate>
      <MobileFormWrapper>
        <SmallerTitle>Wybierz specjalizację</SmallerTitle>
        <OptionContainer>
          <SpecsElement></SpecsElement>
          <SmallButton type="submit" label="Dodaj" />
        </OptionContainer>
        <MobileCenterRowButtonContainer>
          <MobileLinkButton to="/pages/SignUpFull4Mobile">
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

export default SignUpFull3Mobile;
