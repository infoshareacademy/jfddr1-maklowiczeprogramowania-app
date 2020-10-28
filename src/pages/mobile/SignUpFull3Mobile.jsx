import React from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import MobileFormTemplate from "../../components/templates/MobileFormTemplate";
import Button from "../../components/buttons/Button";
import { SignInTitle } from "../../components/SignInUpElements";
import SelectElement from "../../components/SelectElement";

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
const SelectElementContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const SignInTitleActive = styled(SignInTitle)`
  justify-content: center;
  font-size: 2rem;
`;

const SignUpFull3Mobile = () => {
  return (
    <MobileFormTemplate>
      <SignInTitleActive>Wybierz narzędzia</SignInTitleActive>
      <SelectElementContainer>
        <SelectElement
          options={["Dodaj Znajome Narzędzia", "option2", "option3"]}
        />
      </SelectElementContainer>
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
