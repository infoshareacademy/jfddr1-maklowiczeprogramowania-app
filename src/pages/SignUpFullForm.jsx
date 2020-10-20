import React from "react";
import MobileViewTemplate from "../components/MobileViewTemplate";
import SmallButton from "../components/SmallButton";
import Label from "../components/Label";
import Input from "../components/Input";
import { SignInTitle } from "../components/SignIn.styled";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
`;

const SignUpFullForm = () => {
  return (
    <MobileViewTemplate>
      <SignInTitle>Podstawowe Dane</SignInTitle>
      <Label>{"Imię"}</Label>
      <Input type={"text"} />
      <Label>{"Nazwisko"}</Label>
      <Input type={"text"} />
      <Label>{"Email"}</Label>
      <Input type={"email"} />
      <Label>{"Hasło"}</Label>
      <Input type={"password"} />
      <ButtonContainer>
        <SmallButton type={"submit"} label={"Dalej"} />
      </ButtonContainer>
    </MobileViewTemplate>
  );
};

export default SignUpFullForm;
