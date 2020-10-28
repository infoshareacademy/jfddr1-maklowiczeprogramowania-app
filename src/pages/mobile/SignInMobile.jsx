import React, { useState } from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import firebase from "firebase/app";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "../components/buttons/Button";
import Input from "../components/Input";
import MobileViewTemplate, {
  MobileFormWrapper,
} from "../components/templates/MobileViewTemplate";
import {
  Title,
  Description,
  StyledAnchor,
} from "../components/SignInUpElements";
import { StyledLabelDesktop } from "../components/Label";

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

const SignInMobile = () => {
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
    <MobileViewTemplate>
      <MobileFormWrapper onSubmit={submitHandler}>
        <Title>Zaloguj się</Title>
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
        <Description>
          Nie masz konta? Założ je{" "}
          <Link to="../pages/SignUpDesktop">
            <StyledAnchor>tutaj</StyledAnchor>
          </Link>
        </Description>
        <ButtonContainer>
          <Button type={"submit"} label={"Zaloguj"} />
        </ButtonContainer>
      </MobileFormWrapper>
    </MobileViewTemplate>
  );
};

export default SignInMobile;
