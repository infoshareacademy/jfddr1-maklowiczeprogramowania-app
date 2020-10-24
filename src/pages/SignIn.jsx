import React from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";
import DesktopFormTemplate from "../components/templates/DesktopFormTemplate";
import Input from "../components/Input";
import { StyledLabelDesktop } from "../components/Label";
import MobileFormTemplate from "../components/templates/MobileFormTemplate";
import {
  SignInTitle,
  StyledParagraph,
  StyledAnchor,
} from "../components/SignInUpElements";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 40px;
`;

const SignInForm = () => {
  return (
    <>
      <SignInTitle>Zaloguj się</SignInTitle>
      <StyledLabelDesktop>{"Email"}</StyledLabelDesktop>
      <Input type={"email"} />
      <StyledLabelDesktop>{"Hasło"}</StyledLabelDesktop>
      <Input type={"password"} />
      <StyledParagraph>
        Nie masz konta? Założ je{" "}
        <Link to="../pages/SignUpDesktop">
          <StyledAnchor>tutaj</StyledAnchor>
        </Link>
      </StyledParagraph>
      <ButtonContainer>
        <Button type={"submit"} label={"Zaloguj"} />
      </ButtonContainer>
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
