import React from "react";
import styled from "styled-components"
import Hamburger from "../components/Hamburger"

const StyledBody = styled.main`
background: #FBECCC;
font: Quicksand 500px;
width: 100vw;
height: 100vh;
`;

function Menu() {
  return (
      <>
   <StyledBody>
       <Hamburger/>
   </StyledBody>
   </>
  );
}

export default Menu;

