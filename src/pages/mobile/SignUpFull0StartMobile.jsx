import React from "react";
import styled from "styled-components";
import MobileViewTemplate, {
  MobileCommonWrapper,
} from "../../components/templates/MobileViewTemplate";
import signUpFullImageMobileImageSrc from "../../img/sign-up-full-image-mobile.svg";
import {
  SmallerTitle,
  MobileCenterRowButtonContainer,
  MobileSlideContainer,
  SlideItem,
  MobileLinkButton,
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
        <SmallerTitle>Załóż konto w kilku prostych krokach!</SmallerTitle>
        <MobileCenterRowButtonContainer>
          <MobileLinkButton to="/pages/WelcomePage">Cofnij</MobileLinkButton>
          <MobileLinkButton to="/pages/SignUpFull1Mobile">
            Załóż konto
          </MobileLinkButton>
        </MobileCenterRowButtonContainer>
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
