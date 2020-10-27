import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import DesktopFormTemplate from "../../components/templates/DesktopFormTemplate";
import { StyledLabelDesktop } from "../../components/Label";
import Input from "../../components/Input";
import MediumButton from "../../components/buttons/MediumButton";
import {
  SignInTitle,
  StyledParagraph,
  StyledAnchor,
} from "../../components/SignInUpElements";
const MainInputContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

const SideInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 15px 40px;
`;

const SingUpInfoContainer = styled.section`
  font-size: 0.8rem;
  margin: -20px 0 0 0;
`;

const SingUpInfoMark = styled.span`
  color: #fbbb9a;
  font-size: 2.4rem;
`;

const SingUpInfoParagraph = styled.p`
  margin: -20px 0 25px 10px;
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

const Form = styled.form``;

const SignUpDesktop = () => {
  const firstNameRef = React.createRef();
  const secondNameRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const [error, setError] = useState();
  const { signUp } = useAuth();
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    signUp(
      // firstNameRef.current.value,
      // secondNameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(() => {
        history.push("/pages/AuthWelcomeView");
      })
      .catch(() => {
        setError("Rejestracja nie powiodła się, spróbuj ponownie!");
      });
  };

  return (
    <DesktopFormTemplate>
      <SignInTitle>Załóż konto</SignInTitle>
      {error && (
        <ErrorMessageBackground>
          <ErrorMessageParagraph>{error}</ErrorMessageParagraph>
        </ErrorMessageBackground>
      )}
      <Form onSubmit={submitHandler}>
        <MainInputContainer>
          <SideInputContainer>
            <StyledLabelDesktop htmlFor={"firstName"}>
              {"Imię"}
            </StyledLabelDesktop>
            <Input
              ref={firstNameRef}
              id={"firstName"}
              name={"firstName"}
              type={"text"}
              required
            />
            <StyledLabelDesktop htmlFor={"email"}>{"Email"}</StyledLabelDesktop>
            <Input
              ref={emailRef}
              id={"email"}
              name={"email"}
              type={"email"}
              required
            />
          </SideInputContainer>
          <SideInputContainer>
            <StyledLabelDesktop htmlFor={"secondName"}>
              {"Nazwisko"}
            </StyledLabelDesktop>
            <Input
              ref={secondNameRef}
              id={"secondName"}
              name={"secondName"}
              type={"text"}
              required
            />
            <StyledLabelDesktop htmlFor={"password"}>
              {"Hasło"}
            </StyledLabelDesktop>
            <Input
              ref={passwordRef}
              id={"password"}
              name={"password"}
              type={"password"}
              required
            />
          </SideInputContainer>
        </MainInputContainer>
        <SingUpInfoContainer>
          <StyledParagraph>
            Masz już konto? Zaloguj się
            <StyledAnchor href="/">tutaj</StyledAnchor>
          </StyledParagraph>
          <SingUpInfoMark>!</SingUpInfoMark>
          <SingUpInfoParagraph>
            Wypełnij nasz szczegółowy formularz, żeby korzystać ze wszystkich
            możliwości, zrób to teraz i miej to z głowy!
          </SingUpInfoParagraph>
          <SingUpInfoParagraph>
            Możesz też pominąć ten krok i przyglądać się naszemu portalowi z
            nieco dalszej odległości!
          </SingUpInfoParagraph>
        </SingUpInfoContainer>
        <ButtonContainer>
          <MediumButton type={"submit"} label={"Stwórz konto"} />
          <MediumButton label={"Wypełnij formularz"} />
        </ButtonContainer>
      </Form>
    </DesktopFormTemplate>
  );
};

export default SignUpDesktop;
