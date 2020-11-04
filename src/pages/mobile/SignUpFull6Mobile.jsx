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
  TagsElement,
  MobileLinkButton,
} from "../../components/SignInUpElements";

const SignUpFull6Mobile = () => {
  return (
    <MobileViewTemplate>
      <MobileFormWrapper>
        <SmallerTitle>Wybierz obszar swoich zainteresowań</SmallerTitle>
        <OptionContainer>
          <TagsElement />
          <SmallButton type="submit" label="Dodaj" />
        </OptionContainer>
        <MobileCenterRowButtonContainer>
          <MobileLinkButton to="/pages/SignUpFull7DoneMobile">
            Załóż konto
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
