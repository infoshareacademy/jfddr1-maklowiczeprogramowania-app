import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MobileViewTemplate, {
  MobileFormWrapper,
} from "../../components/templates/MobileViewTemplate";
import SmallButton from "../../components/buttons/SmallButton";
import {
  SmallerTitle,
  OptionContainer,
  MobileCenterRowButtonContainer,
  MobileSlideContainer,
  SlideItem,
  SlideItemActive,
  ToolsElement,
  MobileLinkButton,
} from "../../components/SignInUpElements";

const SignUpFull5Mobile = () => {
  return (
    <MobileViewTemplate>
      <MobileFormWrapper>
        <SmallerTitle>Wybierz narzędzia</SmallerTitle>
        <OptionContainer>
          <ToolsElement />
          <SmallButton type="submit" label="Dodaj" />
        </OptionContainer>
        <MobileCenterRowButtonContainer>
          <MobileLinkButton to="/pages/SignUpFull6Mobile">
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
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull4Mobile"
        >
          <SlideItem>•</SlideItem>
        </Link>
        <SlideItemActive>•</SlideItemActive>
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

export default SignUpFull5Mobile;
