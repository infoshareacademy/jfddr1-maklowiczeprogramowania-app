import React from "react";
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

const SignUpFull1Mobile = () => {
  return (
    <MobileViewTemplate>
      <MobileFormWrapper>
        <SmallerTitle>Podstawowe Dane</SmallerTitle>
        <LabelMobile htmlFor="firstName">{"Imię"}</LabelMobile>
        <Input id="firstName" name="firstName" type="text" />
        <LabelMobile htmlFor="secondName">{"Nazwisko"}</LabelMobile>
        <Input id="secondName" name="secondName" type="text" />
        <LabelMobile htmlFor="email">{"Email"}</LabelMobile>
        <Input id="email" name="email" type="email" />
        <LabelMobile htmlFor="password">{"Hasło"}</LabelMobile>
        <Input id="password" name="password" type="password" />
        <MobileCenterRowButtonContainer>
          <MobileLinkButton to="/pages/SignUpFull2Mobile">
            Dalej
          </MobileLinkButton>
        </MobileCenterRowButtonContainer>
      </MobileFormWrapper>
      <MobileSlideContainer>
        <SlideItemActive>•</SlideItemActive>
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

export default SignUpFull1Mobile;
