import React from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";
import DesktopFormTemplate from "../components/templates/DesktopFormTemplate";
import Input from "../components/Input";
import MobileFormTemplate from "../components/templates/MobileFormTemplate";
import WelcomePage from "../pages/WelcomePage";
import {
  SignInTitle,
  StyledParagraph,
  StyledAnchor,
} from "../components/SignInUpElements";
import { StyledLabelDesktop } from "../components/Label";
import Header from "../components/Header";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 40px;
`;

const SignInForm = () => {
  return (
    <>
      <SignInTitle>Zaloguj się</SignInTitle>
      <StyledLabelDesktop htmlFor={"email"}>{"Email"}</StyledLabelDesktop>
      <Input id={"email"} name={"email"} type={"email"} />
      <StyledLabelDesktop htmlFor={"password"}>{"Hasło"}</StyledLabelDesktop>
      <Input id={"password"} name={"password"} type={"password"} />
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
        {/* {() => {
          document.querySelector(".hjODiL").style.display = "none";
        }} */}
        {/* {<Header style={{ display: "none" }} />} */}
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
