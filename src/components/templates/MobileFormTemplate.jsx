import React from "react";
import styled from "styled-components";
import HamburgerMenu from "../HamburgerMenu";
import HamburgerMenuSrc from "../../img/radix-icons_hamburger-menu-dark.svg";

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: var(--light-clr);
  color: var(--dark-clr);
  font-weight: 600;
  width: 100vw;
  height: 100vh;
`;

const HamburgerMenuContainer = styled.section`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 30px 30px 0 0;
`;

const FormContainer = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  min-width: 60%;
  max-width: 60%;
`;

const MobileFormTemplate = ({ children }) => {
  return (
    <MainContainer>
      <HamburgerMenuContainer>
        <HamburgerMenu src={HamburgerMenuSrc} />
      </HamburgerMenuContainer>
      <FormContainer>
        {children}
        {/* {anotherNestedComponent} */}
      </FormContainer>
    </MainContainer>
  );
};

export default MobileFormTemplate;
