import React from "react";
import styled from "styled-components";
import DesktopViewWithCloudsTemplate from "../../components/templates/DesktopWiewWithCloudsTemplate";
import { techDB } from "../../mocks/TechData";
import MediumButton from "../../components/buttons/MediumButton";
import { DesktopFormWrapper } from "../../components/SignInUpElements";

const Title = styled.header`
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  font-size: 2.6rem;
  color: var(--dark-clr);
`;

const Header = styled.header`
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  font-size: 2.6rem;
  color: var(--dark-clr);
  margin-top: 50px;
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3.1rem;
  margin-bottom: 3.1rem;
  gap: 0.3rem;
`;

const TechElement = () => {
  const searchedTechElements = techDB.map((el) => {
    console.log(el.label);
    return <option value={el.label}>{el.label}</option>;
  });
  return <Option>{searchedTechElements}</Option>;
};

export const Option = styled.select`
  height: 4rem;
  width: 50%;
  border: none;
  background-color: #ecf0f2;
  color: #c8c8c8;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  width: 50%;
`;
const SignUpFullDesktop2 = () => {
  return (
    <DesktopViewWithCloudsTemplate>
      <DesktopFormWrapper>
        <Title>Wybierz Technologię</Title>
        <OptionContainer>
          <TechElement />
        </OptionContainer>
        <ButtonContainer>
          <MediumButton type="" label="Python" />
          <MediumButton type="" label="Python" />
          <MediumButton type="" label="Python" />
        </ButtonContainer>
        <Header>Krok 3 z 4</Header>
      </DesktopFormWrapper>
    </DesktopViewWithCloudsTemplate>
  );
};

export default SignUpFullDesktop2;
