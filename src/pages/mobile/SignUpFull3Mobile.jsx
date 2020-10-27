import React from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import MobileFormTemplate from "../../components/templates/MobileFormTemplate";
import Button from "../../components/buttons/Button";
import { SignInTitle } from "../../components/SignInUpElements";

const SlideItem = styled.span`
  font-size: 2rem;
`;

const SlideItemActive = styled(SlideItem)`
  color: #fbbb9a;
  font-size: 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
`;

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
  align-items: center;
`;

const SignUpFull3Mobile = () => {
  return (
    <MobileFormTemplate>
      <SignInTitle>Wybierz narzędzia</SignInTitle>
      <ButtonContainer>
        <Button type={"submit"} label={"Stwórz konto"} />
      </ButtonContainer>
      <SlideContainer>
        <SlideItem>•</SlideItem>
        <SlideItem>•</SlideItem>
        <SlideItem>•</SlideItem>
        <SlideItemActive>•</SlideItemActive>
      </SlideContainer>
    </MobileFormTemplate>
  );
};

export default SignUpFull3Mobile;
