import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MobileViewTemplate, {
  MobileCommonWrapper,
} from "../../components/templates/MobileViewTemplate";
import ProjectDoneIconSrc from "../../img/project-done.svg";
import SmallButton from "../../components/buttons/SmallButton";
import {
  CenterRowButtonContainer,
  MobileSlideContainer,
  SlideItemActive,
  SignUpDoneIconWrapper,
  SignUpDoneIcon,
  SignUpDoneTitle,
  SignUpDoneDescription,
} from "../../components/SignInUpElements";

const SignUpFull6DoneMobile = () => {
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
        <CenterRowButtonContainer>
          <SmallButton type="submit" label="Profil" />
        </CenterRowButtonContainer>
      </MobileCommonWrapper>
      <MobileSlideContainer>
        <SlideItemActive>•</SlideItemActive>
        <SlideItemActive>•</SlideItemActive>
        <SlideItemActive>•</SlideItemActive>
        <SlideItemActive>•</SlideItemActive>
        <SlideItemActive>•</SlideItemActive>
      </MobileSlideContainer>
    </MobileViewTemplate>
  );
};

export default SignUpFull6DoneMobile;
