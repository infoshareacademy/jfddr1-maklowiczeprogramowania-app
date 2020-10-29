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
  ButtonContainer,
  SlideContainer,
  SlideItemActive,
} from "../../components/SignInUpElements";
import { Description } from "../../components/SignInUpElements";

const ProjectDoneWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const ProjectDone = styled.img`
  height: 12.5rem;
  margin-bottom: 1.5rem;
`;

const CongratTitle = styled(SmallerTitle)`
  margin-bottom: 1rem;
`;

const DescriptionCenter = styled(Description)`
  font-size: 1.3rem;
  text-align: center;
  margin: 0.3rem 0 0.3rem 0;
`;

const SignUpFull7Mobile = () => {
  return (
    <MobileViewTemplate>
      <MobileCommonWrapper>
        <ProjectDoneWrapper>
          <ProjectDone src={ProjectDoneIconSrc} />
        </ProjectDoneWrapper>
        <CongratTitle>Gratulacje!</CongratTitle>
        <DescriptionCenter>
          Utworzyłeś konto, teraz możesz korzystać z naszych dobrodziejstw!
        </DescriptionCenter>
        <ButtonContainer>
          <SmallButton type={"submit"} label={"Profil"} />
        </ButtonContainer>
      </MobileCommonWrapper>
      <SlideContainer>
        <SlideItemActive>•</SlideItemActive>
        <SlideItemActive>•</SlideItemActive>
        <SlideItemActive>•</SlideItemActive>
        <SlideItemActive>•</SlideItemActive>
        <SlideItemActive>•</SlideItemActive>
      </SlideContainer>
    </MobileViewTemplate>
  );
};

export default SignUpFull7Mobile;
