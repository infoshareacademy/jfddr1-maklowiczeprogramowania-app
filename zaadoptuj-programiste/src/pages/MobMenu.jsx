import React from "react";
import styled from "styled-components";
import MobTemplate from "../components/MobTemplate";

const MobMenuAnchor = styled.a`
padding: 12px;
`;

// const ExampleComp = () =>{
//   return <div>Cześć</div>
// }

const MobMenu = () => {
  return (
  // <MobTemplate anotherNestedComponent={<ExampleComp/>} >
  <MobTemplate>
      <MobMenuAnchor>Zaloguj się</MobMenuAnchor>
      <MobMenuAnchor>Zarejestruj się</MobMenuAnchor>
      <MobMenuAnchor>Strona główna</MobMenuAnchor>
      <MobMenuAnchor>Jak to działa?</MobMenuAnchor>
      <MobMenuAnchor>Wiedza o IT</MobMenuAnchor>
  </MobTemplate>
  );
}

export default MobMenu;

