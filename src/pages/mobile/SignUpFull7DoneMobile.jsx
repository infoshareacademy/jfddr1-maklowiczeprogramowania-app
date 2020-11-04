import React from "react";
import MobileViewTemplate, {
  MobileCommonWrapper,
} from "../../components/templates/MobileViewTemplate";
import ProjectDoneIconSrc from "../../img/project-done.svg";
import {
  MobileCenterRowButtonContainer,
  MobileSlideContainer,
  SlideItemActive,
  SignUpDoneIconWrapper,
  SignUpDoneIcon,
  SignUpDoneTitle,
  SignUpDoneDescription,
  MobileLinkButton,
} from "../../components/SignInUpElements";

const SignUpFull7DoneMobile = () => {
  return (
    <MobileViewTemplate>
      <MobileCommonWrapper>
        <SignUpDoneIconWrapper>
          <SignUpDoneIcon src={ProjectDoneIconSrc} />
        </SignUpDoneIconWrapper>
        <SignUpDoneTitle>Gratulacje!</SignUpDoneTitle>
        <SignUpDoneDescription>
          Utworzyłeś konto, teraz możesz korzystać z naszych dobrodziejstw!
        </SignUpDoneDescription>
        <MobileCenterRowButtonContainer>
          <MobileLinkButton to="/pages/">Profil</MobileLinkButton>
        </MobileCenterRowButtonContainer>
      </MobileCommonWrapper>
      <MobileSlideContainer>
        <SlideItemActive>•</SlideItemActive>
        <SlideItemActive>•</SlideItemActive>
        <SlideItemActive>•</SlideItemActive>
        <SlideItemActive>•</SlideItemActive>
        <SlideItemActive>•</SlideItemActive>
        <SlideItemActive>•</SlideItemActive>
      </MobileSlideContainer>
    </MobileViewTemplate>
  );
};

export default SignUpFull7DoneMobile;
