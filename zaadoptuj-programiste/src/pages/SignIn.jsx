import React from "react";
import MobileViewTemplate from "../components/MobileViewTemplate";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";
import {
  SignInTitle,
  StyledParagraph,
  StyledAnchor,
} from "../components/SignIn.styled";

const SignIn = () => {
  return (
    <MobileViewTemplate>
      <SignInTitle>Zaloguj się</SignInTitle>
      <Label>{"Email"}</Label>
      <Input type={"email"} />
      <Label>{"Hasło"}</Label>
      <Input type={"password"} />
      <StyledParagraph>
        Nie masz konta? Założ je <StyledAnchor href="/">tutaj</StyledAnchor>
      </StyledParagraph>
      <Button type={"submit"} label={"Zaloguj"} />
    </MobileViewTemplate>
  );
};

export default SignIn;
