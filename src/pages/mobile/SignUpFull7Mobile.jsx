import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MobileViewTemplate, {
  MobileCommonWrapper,
} from "../../components/templates/MobileViewTemplate";
import ProjectDoneIconSrc from "../../img/project-done.svg";
import SmallButton from "../../components/buttons/SmallButton";
import {
  SmallerTitle,
  CenterRowButtonContainer,
  MobileSlideContainer,
  SlideItemActive,
} from "../../components/SignInUpElements";
import { Description } from "../../components/SignInUpElements";

const ProjectDoneWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const ProjectDoneIcon = styled.img`
  height: 12.5rem;
  margin-bottom: 1.5rem;
`;

const CongratTitle = styled(SmallerTitle)`
  margin-bottom: 1rem;
`;

const ProjectDoneDescription = styled(Description)`
  font-size: 1.3rem;
  text-align: center;
  margin: 0.3rem 0 0.3rem 0;
`;

const SignUpFull7Mobile = () => {
  return (
    <MobileViewTemplate>
      <MobileCommonWrapper>
        <ProjectDoneWrapper>
          <ProjectDoneIcon src={ProjectDoneIconSrc} />
        </ProjectDoneWrapper>
        <CongratTitle>Gratulacje!</CongratTitle>
        <ProjectDoneDescription>
          Utworzyłeś konto, teraz możesz korzystać z naszych dobrodziejstw!
        </ProjectDoneDescription>
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

export default SignUpFull7Mobile;
