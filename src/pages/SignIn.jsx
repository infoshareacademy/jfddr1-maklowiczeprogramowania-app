import React from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";
import DesktopFormTemplate from "../components/templates/DesktopFormTemplate";
import Input from "../components/Input";
import Label from "../components/Label";
import MobileFormTemplate from "../components/templates/MobileFormTemplate";
import {
  SignInTitle,
  StyledParagraph,
  StyledAnchor,
} from "../components/SignIn.styled";

const SignInForm = () => {
  return (
    <>
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
    </>
  );
};

const SignIn = () => {
  return (
    <>
      <MediaQuery maxWidth={1023}>
        <MobileFormTemplate>
          <SignInForm />
        </MobileFormTemplate>
      </MediaQuery>
      <MediaQuery minWidth={1024}>
        <DesktopFormTemplate>
          <SignInForm />
        </DesktopFormTemplate>
      </MediaQuery>
    </>
  );
};

export default SignIn;
