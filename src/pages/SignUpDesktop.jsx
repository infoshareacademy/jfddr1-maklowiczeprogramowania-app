import React from "react";
import styled from "styled-components";
import MobileViewTemplate from "../components/MobileViewTemplate";
import { StyledLabel } from "../components/Label";
import Input from "../components/Input";
import MediumButton from "../components/MediumButton";
import {
  SignInTitle,
  StyledParagraph,
  StyledAnchor,
} from "../components/SignIn.styled";

const MainInputContainer = styled.div`
display: flex; 
gap: 5rem;
`;

const SideInputContainer = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
flex-basis: 1rem;
`;

const StyleLabelDesktop = styled(StyledLabel)`
margin: 45px 0 3px 0;
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
    //width: 811px;
    //height: 650px; 
    <MobileViewTemplate>
      <SignInTitle>Załóż konto</SignInTitle>
      <MainInputContainer style={{ display: "flex", gap: "5rem" }}>
        <SideInputContainer>
          <StyleLabelDesktop>{"Imię"}</StyleLabelDesktop>
          <Input type={""} />
          <StyleLabelDesktop>{"Email"}</StyleLabelDesktop>
          <Input type={"email"} />
      <StyledParagraph>
        Masz już konto? Zaloguj się <StyledAnchor href="/">tutaj</StyledAnchor>
      </StyledParagraph>
        <SingUpInfoContainer>
          <SingUpInfoMark>!</SingUpInfoMark>
          <SingUpInfoParagraph>
            Wypełnij nasz szczegółowy formularz, żeby korzystać ze wszystkich możliwości, zrób to teraz i miej to z głowy!
          </SingUpInfoParagraph>
          <SingUpInfoParagraph>
            Możesz też pominąć ten krok i przyglądać się naszemu portalowi z nieco dalszej odległości!
          </SingUpInfoParagraph>
        </SingUpInfoContainer>
        </SideInputContainer>
        <SideInputContainer>
          <StyleLabelDesktop>{"Nazwisko"}</StyleLabelDesktop>
          <Input type={""} />
          <StyleLabelDesktop>{"Hasło"}</StyleLabelDesktop>
          <Input type={"password"} />
        </SideInputContainer>
      </MainInputContainer>
      <ButtonContainer>
        <MediumButton type={"submit"} label={"Stwórz konto"} />
        <MediumButton type={"submit"} label={"Wypełnij formularz"} />
      </ButtonContainer>
    </MobileViewTemplate>
  );
};

export default SignUpDesktop;
