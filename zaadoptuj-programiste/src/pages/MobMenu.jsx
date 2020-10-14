import React from "react";
import styled from "styled-components"
import MobTemplate from "../components/MobTemplate";

const MobMenuContainer = styled.section`
align-self: center;
text-align: center;
`;

const MobMenuAnchor = styled.a`
display: block;
padding: 10px;
`;

// const ExampleComp = () =>{
//   return <div>Cześć</div>
// }

const MobMenu = () => {
  return (
  // <MobTemplate anotherNestedComponent={<ExampleComp/>} >
  <MobTemplate>
    <MobMenuContainer>
      <MobMenuAnchor>Zaloguj się</MobMenuAnchor>
      <MobMenuAnchor>Zarejestruj się</MobMenuAnchor>
      <MobMenuAnchor>Strona główna</MobMenuAnchor>
      <MobMenuAnchor>Jak to działa?</MobMenuAnchor>
      <MobMenuAnchor>Wiedza o IT</MobMenuAnchor>
    </MobMenuContainer>
  </MobTemplate>
  );
}

export default MobMenu;

