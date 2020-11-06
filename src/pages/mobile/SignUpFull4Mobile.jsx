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
  TechElement,
  MobileLinkButton,
} from "../../components/SignInUpElements";

const SignUpFull4Mobile = () => {
  return (
    <MobileViewTemplate>
      <MobileFormWrapper>
        <SmallerTitle>Wybierz technologie</SmallerTitle>
        <OptionContainer>
          <TechElement />
          <SmallButton type="submit" label="Dodaj" />
        </OptionContainer>
        <MobileCenterRowButtonContainer>
          <MobileLinkButton to="/pages/SignUpFull5Mobile">
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
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull3Mobile"
        >
          <SlideItem>•</SlideItem>
        </Link>
        <SlideItemActive>•</SlideItemActive>
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

export default SignUpFull4Mobile;
