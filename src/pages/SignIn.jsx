import React, { useState } from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import firebase from "firebase/app";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "../components/buttons/Button";
import DesktopFormTemplate from "../components/templates/DesktopFormTemplate";
import Input from "../components/Input";
import MobileFormTemplate from "../components/templates/MobileFormTemplate";
import {
  SignInTitle,
  StyledParagraph,
  StyledAnchor,
} from "../components/SignInUpElements";
import { StyledLabelDesktop } from "../components/Label";

export const SignInFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  min-width: 60%;
  max-width: 60%;
  padding: 2rem 0;

  @media (max-width: 1023px) {
    min-width: 90%;
    max-width: 90%;
  } ;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 40px;
`;

const ErrorMessageBackground = styled.div`
  margin-top: 2em;
  padding: 1em;
  border-radius: 4px;
  background: #fbbb9a;
  color: #f49869;
`;

const ErrorMessageParagraph = styled.p`
  font-size: 1.1rem;
`;

const SignInForm = () => {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const [error, setError] = useState("");
  const { signIn, getUserData } = useAuth();
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    signIn(emailRef.current.value, passwordRef.current.value)
      .then((cred) => {
        getUserData(cred.user.uid);
        history.push("/pages/AuthWelcomeView");
      })
      .catch(() => {
        setError("Logowanie nie powiodło się, spróbuj jeszcze raz!");
      });
  };

  return (
    <SignInFormContainer onSubmit={submitHandler}>
      <SignInTitle>Zaloguj się</SignInTitle>
      {error && (
        <ErrorMessageBackground>
          <ErrorMessageParagraph>{error}</ErrorMessageParagraph>
        </ErrorMessageBackground>
      )}
      <StyledLabelDesktop htmlFor={"email"}>{"Email"}</StyledLabelDesktop>
      <Input ref={emailRef} id={"email"} name={"email"} type={"email"} />
      <StyledLabelDesktop htmlFor={"password"}>{"Hasło"}</StyledLabelDesktop>
      <Input
        ref={passwordRef}
        id={"password"}
        name={"password"}
        type={"password"}
      />
      <StyledParagraph>
        Nie masz konta? Założ je{" "}
        <Link to="../pages/SignUpDesktop">
          <StyledAnchor>tutaj</StyledAnchor>
        </Link>
      </StyledParagraph>
      <ButtonContainer>
        <Button type={"submit"} label={"Zaloguj"} />
      </ButtonContainer>
    </SignInFormContainer>
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
