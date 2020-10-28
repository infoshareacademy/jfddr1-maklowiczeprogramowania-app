import React from "react";
import styled from "styled-components";
import Input from "../../components/Input";
import Label from "../../components/Label";
import MobileViewTemplate, {
  MobileFormWrapper,
} from "../../components/templates/MobileViewTemplate";
import SmallButton from "../../components/buttons/SmallButton";
import {
  Title,
  Description,
  StyledAnchor,
} from "../../components/SignInUpElements";

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: -15px 0 0 0;
`;

const SingUpInfoWrapper = styled.section`
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
    <MobileViewTemplate>
      <MobileFormWrapper>
        <Title>Załóż konto</Title>
        <Label htmlFor={"firstName"}>{"Imię"}</Label>
        <Input id={"firstName"} name={"firstName"} type={"text"} />
        <Label htmlFor={"secondName"}>{"Nazwisko"}</Label>
        <Input id={"secondName"} name={"secondName"} type={"text"} />
        <Label htmlFor={"email"}>{"Email"}</Label>
        <Input id={"email"} name={"email"} type={"email"} />
        <Label htmlFor={"password"}>{"Hasło"}</Label>
        <Input id={"password"} name={"password"} type={"password"} />
        <Description>
          Masz już konto? Zaloguj się{" "}
          <StyledAnchor href="/">tutaj</StyledAnchor>
        </Description>
        <SingUpInfoWrapper>
          <SingUpInfoMark>!</SingUpInfoMark>
          <SingUpInfoParagraph>
            Wypełnij nasz szczegółowy formularz, żeby korzystać ze wszystkich
            możliwości, zrób to teraz i miej to z głowy!
          </SingUpInfoParagraph>
          <SingUpInfoParagraph>
            Możesz też pominąć ten krok i przyglądać się naszemu portalowi z
            nieco dalszej odległości!
          </SingUpInfoParagraph>
        </SingUpInfoWrapper>
        <ButtonContainer>
          <SmallButton type={"submit"} label={"Stwórz konto"} />
          <SmallButton type={"submit"} label={"Wypełnij formularz"} />
        </ButtonContainer>
      </MobileFormWrapper>
    </MobileViewTemplate>
  );
};

export default SignUpMobile;
