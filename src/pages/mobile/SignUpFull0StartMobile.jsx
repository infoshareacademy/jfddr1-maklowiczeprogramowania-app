import React from "react";
import styled from "styled-components";
import MobileViewTemplate, {
  MobileCommonWrapper,
} from "../../components/templates/MobileViewTemplate";
import SmallButton from "../../components/buttons/SmallButton";
import signUpFullImageMobileImageSrc from "../../img/sign-up-full-image-mobile.svg";
import {
  SmallerTitle,
  CenterRowButtonContainer,
  MobileSlideContainer,
  SlideItem,
} from "../../components/SignInUpElements";

const FullFormMobileImageComponent = styled.img``;

const FullFormMobileImage = ({ src }) => {
  return <FullFormMobileImageComponent src={src} />;
};

const SignUpFull0StartMobile = () => {
  return (
    <MobileViewTemplate>
      <MobileCommonWrapper>
        <FullFormMobileImage src={signUpFullImageMobileImageSrc} />
        <SmallerTitle>Załóż konto w kilku</SmallerTitle>
        <SmallerTitle>prostych krokach!</SmallerTitle>
        <CenterRowButtonContainer>
          <SmallButton type="submit" label="Cofnij" />
          <SmallButton type="submit" label="Tworzę konto" />
        </CenterRowButtonContainer>
      </MobileCommonWrapper>
      <MobileSlideContainer>
        <SlideItem>•</SlideItem>
        <SlideItem>•</SlideItem>
        <SlideItem>•</SlideItem>
        <SlideItem>•</SlideItem>
        <SlideItem>•</SlideItem>
        <SlideItem>•</SlideItem>
      </MobileSlideContainer>
    </MobileViewTemplate>
  );
};

export default SignUpFull0StartMobile;
