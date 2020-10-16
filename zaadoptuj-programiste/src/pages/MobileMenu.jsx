import React from "react";
import styled from "styled-components";
import MobileViewTemplate from "../components/MobileViewTemplate";

const MobileMenuAnchor = styled.a`
padding: 15px;
font-weight: 700;
font-size: 2rem;
text-align: center;
`;

// const ExampleComp = () =>{
//   return <div>Cześć</div>
// }

const MobileMenu = () => {
  return (
  // <MobTemplate anotherNestedComponent={<ExampleComp/>} >
  <MobileViewTemplate>
      <MobileMenuAnchor>Zaloguj się</MobileMenuAnchor>
      <MobileMenuAnchor>Zarejestruj się</MobileMenuAnchor>
      <MobileMenuAnchor>Strona główna</MobileMenuAnchor>
      <MobileMenuAnchor>Jak to działa?</MobileMenuAnchor>
      <MobileMenuAnchor>Wiedza o IT</MobileMenuAnchor>
  </MobileViewTemplate>
  );
}

export default MobileMenu;

