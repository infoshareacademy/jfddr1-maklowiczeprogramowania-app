import React from "react";
import styled from "styled-components";
import MobileViewTemplate from "../components/MobileViewTemplate";
import Label from "../components/Label";
import Input from "../components/Input";
import SmallButton from "../components/SmallButton";
import {
  SignInTitle,
  StyledParagraph,
  StyledAnchor,
} from "../components/SignIn.styled";

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: -15px 0 0 0;
`;

const SingUpInfoContainer = styled.section`
  font-size: 0.7rem;
  margin: -20px 0 0 0;
`;

const SingUpInfoMark = styled.span`
  color: #fbbb9a;
  font-size: 2.4rem;
`;

const SingUpInfoParagraph = styled.p`
  margin: -20px 0 25px 10px;
`;

const SignUp = () => {
  return (
    <MobileViewTemplate>
      <SignInTitle>Załóż konto</SignInTitle>
      <Label>{"Imię"}</Label>
      <Input type={""} />
      <Label>{"Nazwisko"}</Label>
      <Input type={""} />
      <Label>{"Email"}</Label>
      <Input type={"email"} />
      <Label>{"Hasło"}</Label>
      <Input type={"password"} />
      <StyledParagraph>
        Masz już konto? Zaloguj się <StyledAnchor href="/">tutaj</StyledAnchor>
      </StyledParagraph>
      <SingUpInfoContainer>
        <SingUpInfoMark>!</SingUpInfoMark>
        <SingUpInfoParagraph>
          Wypełnij nasz szczegółowy formularz, żeby korzystać ze wszystkich
          możliwości, zrób to teraz i miej to z głowy!
        </SingUpInfoParagraph>
        <SingUpInfoParagraph>
          Możesz też pominąć ten krok i przyglądać się naszemu portalowi z nieco
          dalszej odległości!
        </SingUpInfoParagraph>
      </SingUpInfoContainer>
      <ButtonContainer>
        <SmallButton type={"submit"} label={"Stwórz konto"} />
        <SmallButton type={"submit"} label={"Wypełnij formularz"} />
      </ButtonContainer>
    </MobileViewTemplate>
  );
};

export default SignUp;
