import React from "react";
import styled from "styled-components"
import HamburgerMenu from "../components/HamburgerMenu"
import HamburgerMenuSrc from "../img/radix-icons_hamburger-menu-dark.svg"

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
`;

const MobTemplate = ({children}) => {
  return (
      <>
      <StyledMain>
        <HamburgerMenu src = {HamburgerMenuSrc}/>
        {children}
        {/* {anotherNestedComponent} */}
      </StyledMain>
      </>
    );

  }

export default MobTemplate;
