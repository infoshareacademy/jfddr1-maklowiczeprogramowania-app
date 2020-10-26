import React from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import Input from "../../components/Input";
import Label from "../../components/Label";
import MobileFormTemplate from "../../components/templates/MobileFormTemplate";
import SmallButton from "../../components/buttons/SmallButton";
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

const SignUpFull6FormMobile = () => {
  return (
    <MediaQuery maxDeviceWidth={1024}>
      <MobileFormTemplate>
        <SignInTitle>Podstawowe Dane</SignInTitle>
        <Label htmlFor={"firstName"}>{"Imię"}</Label>
        <Input id={"firstName"} name={"firstName"} type={"text"} />
        <Label htmlFor={"secondName"}>{"Nazwisko"}</Label>
        <Input id={"secondName"} name={"secondName"} type={"text"} />
        <Label htmlFor={"email"}>{"Email"}</Label>
        <Input id={"email"} name={"email"} type={"email"} />
        <Label htmlFor={"password"}>{"Hasło"}</Label>
        <Input id={"password"} name={"password"} type={"password"} />
        <ButtonContainer>
          <SmallButton type={"submit"} label={"Dalej"} />
        </ButtonContainer>
        <SlideContainer>
          <SlideItemActive>•</SlideItemActive>
          <SlideItem>•</SlideItem>
          <SlideItem>•</SlideItem>
          <SlideItem>•</SlideItem>
        </SlideContainer>
      </MobileFormTemplate>
    </MediaQuery>
  );
};

export default SignUpFull6FormMobile;
