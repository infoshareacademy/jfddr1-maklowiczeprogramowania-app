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

const MobMenuContainer = styled.section`
display: flex;
flex-direction: column;
align-self: center;
text-align: center;
`;

const MobTemplate = ({children}) => {
  return (
    <>
      <StyledMain>
        <MobMenuContainer>
          <HamburgerMenu src = {HamburgerMenuSrc}/>
          {children}
          {/* {anotherNestedComponent} */}
        </MobMenuContainer>
      </StyledMain>
      </>
    );

  }

export default MobTemplate;
