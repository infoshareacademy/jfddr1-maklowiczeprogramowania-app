import React from "react";
import styled from "styled-components";
import Input from "../../components/Input";
import Label from "../../components/Label";
import MobileFormTemplate from "../../components/templates/MobileFormTemplate";
import SmallButton from "../../components/buttons/SmallButton";
import {
  SignInTitle,
  StyledParagraph,
  StyledAnchor,
} from "../../components/SignInUpElements";

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
  color: var(--accent-clr);
  font-size: 2.4rem;
`;

const SingUpInfoParagraph = styled.p`
  margin: -20px 0 25px 10px;
`;

const SignUpMobile = () => {
  return (
    <MobileFormTemplate>
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
    </MobileFormTemplate>
  );
};

export default SignUpMobile;
