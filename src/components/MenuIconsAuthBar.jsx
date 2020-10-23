import React from "react";
import styled from "styled-components";
import MenuMessageIconSrc from "../img/message-icon.svg";
import MenuBellIconSrc from "../img/bell-icon.svg";
import HamburgerMenuSrc from "../img/radix-icons_hamburger-menu-dark.svg";
import MediaQuery from "react-responsive";

const MenuIconsAuthBackground = styled.div`
  background: var(--light-clr);
  width: 9em;
  height: 3.5rem;
  border-top-left-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 15px;
`;

const MenuMessageIcon = styled.img`
  width: 1.5rem;
  margin-left: 0.7em;
  @media (min-width: 1024px) {
    width: 1.8rem;
  }
`;

const MenuBellIcon = styled.img`
  width: 1.5rem;
  margin-left: 0.7em;
  @media (min-width: 1024px) {
    width: 1.8rem;
    margin-left: 0.9em;
  }
`;

const HamburgerAuthMenu = styled.img`
  width: 1.5rem;
  margin-left: 0.7em;
`;

export const MenuIconsAuthBar = () => {
  return (
    <MenuIconsAuthBackground>
      <MenuMessageIcon src={MenuMessageIconSrc} />
      <MenuBellIcon src={MenuBellIconSrc} />
      <MediaQuery maxDeviceWidth={1024}>
        <HamburgerAuthMenu src={HamburgerMenuSrc} />
      </MediaQuery>
    </MenuIconsAuthBackground>
  );
};
export default MenuIconsAuthBar;
