import React from "react";
import styled from "styled-components";
import SignUpFullImageSrc from "../../img/sign-up-full-image-mobile.svg";
import { ButtonContainer, Title } from "../../components/SignInUpElements";
import { StyledButton } from "../../components/buttons/Button";

const SignUpFullImage = styled.img`
  width: 25em;
`;

const DesktopWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--light-clr);
`;

const StyledSingUpFullDesktopButton = styled(StyledButton)`
  padding: 1em 5em;
  font-size: 1rem;
`;

const SingUpFullDesktopButton = ({ type, label }) => {
  return (
    <StyledSingUpFullDesktopButton type={type}>
      {label}
    </StyledSingUpFullDesktopButton>
  );
};

const SignUpFull1Desktop = () => {
  return (
    <DesktopWrapper>
      <SignUpFullImage src={SignUpFullImageSrc} />
      <Title>Załóż konto w kilku prostych krokach!</Title>
      <ButtonContainer>
        <SingUpFullDesktopButton type={"submit"} label={"Cofnij"} />
        <SingUpFullDesktopButton type={"submit"} label={"Tworzę konto"} />
      </ButtonContainer>
    </DesktopWrapper>
  );
};

export default SignUpFull1Desktop;
