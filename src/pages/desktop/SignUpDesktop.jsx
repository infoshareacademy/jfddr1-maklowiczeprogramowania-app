import React from "react";
import styled from "styled-components";
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

const SignUpDesktop = () => {
  return (
    <DesktopFormTemplate>
      <SignInTitle>Załóż konto</SignInTitle>
      <MainInputContainer>
        <SideInputContainer>
          <StyledLabelDesktop htmlFor={"firstName"}>
            {"Imię"}
          </StyledLabelDesktop>
          <Input id={"firstName"} name={"firstName"} type={"text"} />
          <StyledLabelDesktop htmlFor={"email"}>{"Email"}</StyledLabelDesktop>
          <Input id={"email"} name={"email"} type={"email"} />
          <StyledParagraph>
            Masz już konto? Zaloguj się{" "}
            <StyledAnchor href="/">tutaj</StyledAnchor>
          </StyledParagraph>
          <SingUpInfoContainer>
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
        </SideInputContainer>
        <SideInputContainer>
          <StyledLabelDesktop htmlFor={"secondName"}>
            {"Nazwisko"}
          </StyledLabelDesktop>
          <Input id={"secondName"} name={"secondName"} type={"text"} />
          <StyledLabelDesktop htmlFor={"password"}>
            {"Hasło"}
          </StyledLabelDesktop>
          <Input id={"password"} name={"password"} type={"password"} />
        </SideInputContainer>
      </MainInputContainer>
      <ButtonContainer>
        <MediumButton type={"submit"} label={"Stwórz konto"} />
        <MediumButton type={"submit"} label={"Wypełnij formularz"} />
      </ButtonContainer>
    </DesktopFormTemplate>
  );
};

export default SignUpDesktop;
