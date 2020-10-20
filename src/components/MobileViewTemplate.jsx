import React from "react";
import styled from "styled-components";
import HamburgerMenu from "./HamburgerMenu";
import HamburgerMenuSrc from "../img/radix-icons_hamburger-menu-dark.svg";

const MainContainer = styled.main`
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

const ChildrenContainer = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  min-width: 80%;
  max-width: 80%;
`;

const MobileViewTemplate = ({ children }) => {
  return (
    <MainContainer>
      <HamburgerMenuContainer>
        <HamburgerMenu src={HamburgerMenuSrc} />
      </HamburgerMenuContainer>
      <ChildrenContainer>
        {children}
        {/* {anotherNestedComponent} */}
      </ChildrenContainer>
    </MainContainer>
  );
};

export default MobileViewTemplate;
