import React from "react";
import styled from "styled-components";
import DesktopViewWithCloudsTemplate from "../../components/templates/DesktopWiewWithCloudsTemplate";
import Input from "../../components/Input";
import { StyledLabelDesktop } from "../../components/Label";

const Title = styled.header`
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  font-size: 2.6rem;
  color: var(--dark-clr);
`;

const DesktopFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  min-width: 50%;
  max-width: 50%;
  color: var(--dark-clr);
`;

const InputLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  min-width: 50%;
  max-width: 50%;
`;

const StyledLabelDesktop2 = styled(StyledLabelDesktop)`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Label = ({ htmlFor, children }) => {
  return (
    <StyledLabelDesktop2 htmlFor={htmlFor}>{children}</StyledLabelDesktop2>
  );
};

const Header = styled.header`
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  font-size: 2.6rem;
  color: var(--dark-clr);
  margin-top: 50px;
`;

const SignUpFullDesktop4 = () => {
  return (
    <DesktopViewWithCloudsTemplate>
      <DesktopFormWrapper>
        <Title>Dodaj podstawowe informacje</Title>
        <InputLabelContainer>
          <Label htmlFor={"Imię"}>{"Imię"}</Label>
          <Input name={"Imię"} type={"text"} />
          <Label htmlFor={"Nazwisko"}>{"Nazwisko"}</Label>
          <Input name={"Nazwisko"} type={"text"} />
          <Label htmlFor={"Email"}>{"Email"}</Label>
          <Input name={"Email"} type={"text"} />
          <Label htmlFor={"Hasło"}>{"Hasło"}</Label>
          <Input name={"Hasło"} type={"text"} />
        </InputLabelContainer>
        <Header>Krok 1 z 4</Header>
      </DesktopFormWrapper>
    </DesktopViewWithCloudsTemplate>
  );
};

export default SignUpFullDesktop4;
