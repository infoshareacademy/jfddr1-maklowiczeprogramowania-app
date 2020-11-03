import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DesktopViewWithCloudsTemplate from "../../components/templates/DesktopViewWithCloudsTemplate";
import ProjectDoneIconSrc from "../../img/project-done.svg";
import MediumButton from "../../components/buttons/MediumButton";
import { HalfDesktopFormWrapper } from "../../components/templates/DesktopViewTemplate";
import {
  SignUpDoneIconWrapper,
  SignUpDoneIcon,
  SignUpDoneTitle,
  SignUpDoneDescription,
  CenterRowButtonContainer,
  SlideItemActive,
  SlideDescription,
  DesktopSlideContainer,
} from "../../components/SignInUpElements";

const SignUpFull6DoneDesktop = () => {
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
        <CenterRowButtonContainer>
          <MediumButton type="submit" label="Profil" />
        </CenterRowButtonContainer>
      </HalfDesktopFormWrapper>
      <DesktopSlideContainer>
        <SlideDescription>Krok</SlideDescription>
        <SlideItemActive>1</SlideItemActive>
        <SlideItemActive>2</SlideItemActive>
        <SlideItemActive>3</SlideItemActive>
        <SlideItemActive>4</SlideItemActive>
        <SlideItemActive>5</SlideItemActive>
      </DesktopSlideContainer>
    </DesktopViewWithCloudsTemplate>
  );
};

export default SignUpFull6DoneDesktop;
