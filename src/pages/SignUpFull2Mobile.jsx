import React from "react";
import styled from "styled-components";
import MobileWiewTemplateWithExit from "../components/MobileWiewTemplateWithExit";
import ProjectDoneIconSrc from "../img/project-done.svg";
import SmallButton from "../components/SmallButton";
import { ButtonContainer } from "./signUpFull1Mobile";
import { SignInTitle } from "../components/SignIn.styled";
import { StyledParagraph } from "../components/SignIn.styled";

const ProjectDoneContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const ProjectDone = styled.img`
  height: 250px;
  margin-bottom: 30px;
  margin-top: 100px;
`;

const StyledParagraphCenter = styled(StyledParagraph)`
  text-align: center;
  margin: 5px 0 5px 0;
  font-size: 1.5rem;
`;

const SignInTitleGratulacje = styled(SignInTitle)`
  font-size: 2rem;
`;

const SignUpFull2FormMobile = () => {
  return (
    <MobileWiewTemplateWithExit>
      <ProjectDoneContainer>
        <ProjectDone src={ProjectDoneIconSrc} />
      </ProjectDoneContainer>
      <SignInTitleGratulacje>Gratulacje!</SignInTitleGratulacje>
      <StyledParagraphCenter>
        Utworzyłeś konto, teraz możesz
      </StyledParagraphCenter>
      <StyledParagraphCenter>
        korzystać z naszych dobrodziejstw!
      </StyledParagraphCenter>
      <ButtonContainer>
        <SmallButton type={"submit"} label={"Profil"} />
      </ButtonContainer>
    </MobileWiewTemplateWithExit>
  );
};

export default SignUpFull2FormMobile;
