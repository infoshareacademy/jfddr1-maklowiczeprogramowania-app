import React from "react";
import { createGlobalStyle } from "styled-components";
import AuthMenuMobile from "./pages/AuthMenuMobile";
import AuthWelcomeView from "./pages/AuthWelcomeView";
import MenuMobile from "./pages/MenuMobile";
import Projects from "./pages/Projects";
import SignIn from "./pages/SignIn";
import SignUpMobile from "./pages/SignUpMobile";
import SignUpDesktop from "./pages/SignUpDesktop";
import SignUpFullForm from "./pages/SignUpFullForm";
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
      {/* <AuthWelcomeView /> */}
      <MenuMobile />
      {/* <Projects /> */}
      {/* <SignIn /> */}
      {/* <SignUpMobile /> */}
      {/* <SignUpDesktop /> */}
      {/* <SignUpFullForm /> */}
      {/* <WelcomePage /> */}
    </>
  );
};

export default App;
