import React, { useState } from "react";
import styled from "styled-components";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import DesktopViewTemplate, {
  DesktopFormWrapper,
} from "../../components/templates/DesktopViewTemplate";
import { StyledLabelDesktop } from "../../components/Label";
import Input from "../../components/Input";
import MediumButton from "../../components/buttons/MediumButton";
import {
  Title,
  Description,
  StyledAnchor,
} from "../../components/SignInUpElements";

// const SignUpFormContainer = styled(SignInFormContainer)`
//   min-width: 90%;
//   max-width: 90%;
// `;

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

const SignUpDesktop = () => {
  const firstNameRef = React.createRef();
  const secondNameRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const [error, setError] = useState();
  const { signUp, getUserData } = useAuth();
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    signUp(emailRef.current.value, passwordRef.current.value)
      .then((cred) => {
        firebase.firestore().collection("users").doc(cred.user.uid).set({
          firstName: firstNameRef.current.value,
          secondName: secondNameRef.current.value,
        });
        getUserData(cred.user.uid);
        history.push("/pages/AuthWelcomeView");
      })
      .catch(() => {
        setError("Rejestracja nie powiodła się, spróbuj ponownie!");
      });
  };

  return (
    <DesktopViewTemplate>
      <DesktopFormWrapper onSubmit={submitHandler}>
        <Title>Załóż konto</Title>
        {error && (
          <ErrorMessageBackground>
            <ErrorMessageParagraph>{error}</ErrorMessageParagraph>
          </ErrorMessageBackground>
        )}
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
            <Description>
              Masz już konto? Zaloguj się{" "}
              <Link to="../pages/SignInDesktop">
                <StyledAnchor>tutaj</StyledAnchor>
              </Link>
            </Description>
            <SingUpInfoContainer>
              <SingUpInfoMark>!</SingUpInfoMark>
              <SingUpInfoParagraph>
                Wypełnij nasz szczegółowy formularz, żeby korzystać ze
                wszystkich możliwości, zrób to teraz i miej to z głowy!
              </SingUpInfoParagraph>
              <SingUpInfoParagraph>
                Możesz też pominąć ten krok i przyglądać się naszemu portalowi z
                nieco dalszej odległości!
              </SingUpInfoParagraph>
            </SingUpInfoContainer>
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
        <ButtonContainer>
          <MediumButton type={"submit"} label={"Stwórz konto"} />
          <MediumButton type={""} label={"Wypełnij formularz"} />
        </ButtonContainer>
      </DesktopFormWrapper>{" "}
    </DesktopViewTemplate>
  );
};

export default SignUpDesktop;
