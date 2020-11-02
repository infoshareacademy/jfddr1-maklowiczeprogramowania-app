import React from "react";
import ImageSrc from "../../img/sign-up-full-image-mobile.svg";
import styled from "styled-components";
import { ButtonContainer } from "../../components/SignInUpElements";
import { StyledButton } from "../../components/buttons/Button";

const Image = styled.img`
  width: 25em;
`;

const Title = styled.header`
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  font-size: 2.6rem;
  color: var(--dark-clr);
`;

const DesktopWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  background-color: var(--light-clr);
`;
const StyledDesktopButton = styled.button`
  font-family: "Quicksand";
  background-color: var(--dark-clr);
  color: var(--light-clr);
  padding: 1em 5em;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  outline: none;
`;

const DesktopButton = ({ type, label }) => {
  return <StyledDesktopButton type={type}>{label}</StyledDesktopButton>;
};

const SignUpFullDesktop = () => {
  return (
    <DesktopWrapper>
      <Image src={ImageSrc} />
      <Title>Załóż konto w kilku prostych krokach!</Title>
      <ButtonContainer>
        <DesktopButton type={"submit"} label={"Cofnij"} />
        <DesktopButton type={"submit"} label={"Tworzę konto"}></DesktopButton>
      </ButtonContainer>
    </DesktopWrapper>
  );
};

export default SignUpFullDesktop;
