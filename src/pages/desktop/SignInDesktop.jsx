import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../../components/buttons/Button";
import DesktopViewTemplate, {
  ThinDesktopFormWrapper,
} from "../../components/templates/DesktopViewTemplate";
import Input from "../../components/Input";
import {
  Title,
  Description,
  StyledAnchor,
  ColumnButtonContainer,
  ErrorMessageBackground,
  ErrorMessageParagraph,
} from "../../components/SignInUpElements";
import { LabelDesktop } from "../../components/Label";

const SignInDesktop = () => {
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
    <DesktopViewTemplate>
      <ThinDesktopFormWrapper onSubmit={submitHandler}>
        <Title>Zaloguj się</Title>
        {error && (
          <ErrorMessageBackground>
            <ErrorMessageParagraph>{error}</ErrorMessageParagraph>
          </ErrorMessageBackground>
        )}
        <LabelDesktop htmlFor="email">{"Email"}</LabelDesktop>
        <Input ref={emailRef} id="email" name="email" type="email" />
        <LabelDesktop htmlFor="password">{"Hasło"}</LabelDesktop>
        <Input
          ref={passwordRef}
          id="password"
          name="password"
          type="password"
        />
        <Description>
          Nie masz konta? Założ je{" "}
          <Link to="../pages/SignUpDesktop">
            <StyledAnchor>tutaj</StyledAnchor>
          </Link>
        </Description>
        <ColumnButtonContainer>
          <Button type="submit" label="Zaloguj" />
        </ColumnButtonContainer>
      </ThinDesktopFormWrapper>
    </DesktopViewTemplate>
  );
};

export default SignInDesktop;
