import React from "react";
import MobileViewTemplate from "../components/MobileViewTemplate";
import { Link } from "react-router-dom";
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
        Nie masz konta? Założ je{" "}
        <Link to="../pages/SignUpDesktop">
          <StyledAnchor>tutaj</StyledAnchor>
        </Link>
      </StyledParagraph>
      <Button type={"submit"} label={"Zaloguj"} />
    </MobileViewTemplate>
  );
};

export default SignIn;
