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

const SignUpFullDesktop = () => {
  return (
    <DesktopViewWithCloudsTemplate>
      <DesktopFormWrapper>
        <Title>Pozwól się odnaleźć</Title>
        <InputLabelContainer>
          <Label htmlFor={"Portfolio"}>{"Portfolio"}</Label>
          <Input name={"Portfolio"} type={"text"} />
          <Label htmlFor={"Github"}>{"Github"}</Label>
          <Input name={"Github"} type={"text"} />
          <Label htmlFor={"Linkedin"}>{"Linkedin"}</Label>
          <Input name={"Linkedin"} type={"text"} />
          <Label htmlFor={"Dodaj"}>{"Dodaj zdjęcie"}</Label>
          <Input name={"Dodaj"} type={"text"} />
        </InputLabelContainer>
        <Header>Krok 2 z 4</Header>
      </DesktopFormWrapper>
    </DesktopViewWithCloudsTemplate>
  );
};

export default SignUpFullDesktop;
