import React from "react";
import styled from "styled-components"
// import MobTemplate from "../components/MobTemplate"
import HamburgerMenu from "../components/HamburgerMenu"
import HamburgerMenuSrc from "../img/radix-icons_hamburger-menu-dark.svg"

const MobMenuContainer = styled.section`
align-self: center;
text-align: center;
`;

const MobMenuAnchor = styled.a`
display: block;
padding: 10px;
`;

const StyledMain = styled.main`
background: #FBECCC;
font-family: Quicksand;
font-weight: 600;
font-size: 2em;
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: center;
text-align: center;
`;

const StyledHamburgerMenu = styled(HamburgerMenu)`
position: absolute;
right: 1px;
width: 40px;
margin: 40px`;

const MobMenu = () => {
  return (
      <>
  <StyledMain>
    <StyledHamburgerMenu src = {HamburgerMenuSrc}/>
    <MobMenuContainer>
      <MobMenuAnchor>Zaloguj się</MobMenuAnchor>
      <MobMenuAnchor>Zarejestruj się</MobMenuAnchor>
      <MobMenuAnchor>Strona główna</MobMenuAnchor>
      <MobMenuAnchor>Jak to działa?</MobMenuAnchor>
      <MobMenuAnchor>Wiedza o IT</MobMenuAnchor>
    </MobMenuContainer>
  </StyledMain>
   </>
  );
}

export default MobMenu;

