import React from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();

  const handleClick = () => {
    history.push("/pages/AuthWelcomeView");
  };
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
          <DesktopLinkButton onClick={handleClick}>
            Przejdź do profilu
          </DesktopLinkButton>
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
