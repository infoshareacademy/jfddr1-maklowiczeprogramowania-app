import React from "react";
import styled from "styled-components";
import HamburgerMenu from "../HamburgerMenu";
import HamburgerMenuSrc from "../../img/radix-icons_hamburger-menu-dark.svg";

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  background: var(--light-clr);
  color: var(--dark-clr);
  font-weight: 600;
  width: 100vw;
  height: 100vh;
`;

const HamburgerMenuWrapper = styled.section`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 30px 30px 0 0;
`;

export const MobileCommonWrapper = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  min-width: 80%;
  max-width: 80%;
`;

export const MobileFormWrapper = styled.form`
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
    <MainWrapper>
      <HamburgerMenuWrapper>
        <HamburgerMenu src={HamburgerMenuSrc} />
      </HamburgerMenuWrapper>
      {children}
      {/* {anotherNestedComponent} */}
    </MainWrapper>
  );
};

export default MobileViewTemplate;
