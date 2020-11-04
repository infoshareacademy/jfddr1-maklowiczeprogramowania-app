import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DesktopViewWithCloudsTemplate from "../../components/templates/DesktopViewWithCloudsTemplate";
import ProjectDoneIconSrc from "../../img/project-done.svg";

import { HalfDesktopFormWrapper } from "../../components/templates/DesktopViewTemplate";
import {
  SignUpDoneIconWrapper,
  SignUpDoneIcon,
  SignUpDoneTitle,
  SignUpDoneDescription,
  DesktopCenterRowButtonContainer,
  DesktopLinkButton,
  SlideItemActive,
  SlideDescription,
  DesktopSlideContainer,
} from "../../components/SignInUpElements";

const SignUpFull7DoneDesktop = () => {
  return (
    <DesktopViewWithCloudsTemplate>
      <HalfDesktopFormWrapper>
        <SignUpDoneIconWrapper>
          <SignUpDoneIcon src={ProjectDoneIconSrc} />
        </SignUpDoneIconWrapper>
        <SignUpDoneTitle>Gratulacje!</SignUpDoneTitle>
        <SignUpDoneDescription>
          Utworzyłeś konto, teraz możesz korzystać z naszych dobrodziejstw!
        </SignUpDoneDescription>
        <DesktopCenterRowButtonContainer>
          <DesktopLinkButton to="/pages/">Profil</DesktopLinkButton>
        </DesktopCenterRowButtonContainer>
      </HalfDesktopFormWrapper>
      <DesktopSlideContainer>
        <SlideDescription>Krok</SlideDescription>
        <SlideItemActive>1</SlideItemActive>
        <SlideItemActive>2</SlideItemActive>
        <SlideItemActive>3</SlideItemActive>
        <SlideItemActive>4</SlideItemActive>
        <SlideItemActive>5</SlideItemActive>
        <SlideItemActive>6</SlideItemActive>
      </DesktopSlideContainer>
    </DesktopViewWithCloudsTemplate>
  );
};

export default SignUpFull7DoneDesktop;
