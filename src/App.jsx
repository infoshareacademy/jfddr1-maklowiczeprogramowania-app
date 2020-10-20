import React from "react";
import { createGlobalStyle } from "styled-components";
import AuthMenuMobile from "./pages/AuthMenuMobile";
import AuthWelcomeView from "./pages/AuthWelcomeView";
import MenuMobile from "./pages/MenuMobile";
import Projects from "./pages/Projects";
import SignIn from "./pages/SignIn";
import SignUpDesktop from "./pages/SignUpDesktop";
import SignUpFull1FormMobile from "./pages/signUpFull1Mobile";
import SignUpFull6FormMobile from "./pages/signUpFull6Mobile";
import SignUpMobile from "./pages/SignUpMobile";
import WelcomePage from "./pages/WelcomePage";


const GlobalStyle = createGlobalStyle`
  :root {
    --dark-clr: #2B2B3F;
    --light-clr: #FBECCC;
    --accent-clr: #FBBB9A;
    --text-clr: #FBFBFB;
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
      {/* <AuthMenuMobile /> */}
      {/* <AuthWelcomeView /> */}
      <MenuMobile />
      {/* <Projects /> */}
      {/* <SignIn /> */}
      {/* <SignUpDesktop /> */}
      <SignUpFull1FormMobile />
      <SignUpFull6FormMobile />
      {/* <SignUpMobile /> */}
      {/* <WelcomePage /> */}
    </>
  );
};

export default App;
