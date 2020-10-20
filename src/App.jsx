import React from "react";
import { createGlobalStyle } from "styled-components";
import WelcomePage from "./pages/WelcomePage";
// import MobileMenu from "./pages/MobileMenu";
import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import Projects from "./pages/Projects";
// import SignUpFull from "";
import SignUpFull6FormMobile from "./pages/signUpFull6Mobile";
import SignUpFull1FormMobile from "./pages/signUpFull1Mobile";

const GlobalStyle = createGlobalStyle`
  :root {
    --dark-clr: #2B2B3F;
    --light-clr: #FBECCC;
    --accent-clr: #FBBB9A;
    --text-clr:#FBFBFB;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: "Quicksand", sans-serif;
    width: 100vw;
    color: #FBFBFB;
    overflow-x: hidden;
  }
`;
const App = () => {
  return (
    <>
      <GlobalStyle />
      <WelcomePage />
      <SignIn />
      <SignUpFull6FormMobile />
      <SignUpFull1FormMobile />
      {/* <SignUpFull /> */}
    </>
  );
};

export default App;
