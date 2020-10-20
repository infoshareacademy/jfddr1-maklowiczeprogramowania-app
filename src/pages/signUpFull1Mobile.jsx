import React from "react";
import MobileViewTemplate from "../components/MobileViewTemplate";
import SmallButton from "../components/SmallButton";
import { SignInTitle } from "../components/SignIn.styled";
import styled from "styled-components";
import signUpFullImageMobileImageSrc from "../img/sign-up-full-image-mobile.svg";

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 50px;
  align-items: center;
`;

const SlideItem = styled.span`
  font-size: 2rem;
`;
const SignInTitleCenter = styled(SignInTitle)`
  text-align: center;
  font-size: 2rem;
`;

const FullFormMobileImageComponent = styled.img``;

const FullFormMobileImage = ({ src }) => {
  return <FullFormMobileImageComponent src={src} />;
};

const signUpFull1FormMobile = () => {
  return (
    <MobileViewTemplate>
      <FullFormMobileImage src={signUpFullImageMobileImageSrc} />
      <SignInTitleCenter>Załóż konto w kilku</SignInTitleCenter>
      <SignInTitleCenter>prostych krokach!</SignInTitleCenter>
      <ButtonContainer>
        <SmallButton type={"submit"} label={"Cofnij"} />
        <SmallButton type={"submit"} label={"Tworzę konto"} />
      </ButtonContainer>
      <SlideContainer>
        <SlideItem>•</SlideItem>
        <SlideItem>•</SlideItem>
        <SlideItem>•</SlideItem>
        <SlideItem>•</SlideItem>
      </SlideContainer>
    </MobileViewTemplate>
  );
};

export default signUpFull1FormMobile;
