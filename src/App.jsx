import React from "react";
import { createGlobalStyle } from "styled-components";
import WelcomePage from "./pages/WelcomePage";
import AuthWelcomeView from "./pages/AuthWelcomeView";
// import MobileMenu from "./pages/MobileMenu";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import Projects from "./pages/Projects";
// import SignUpFull from "";

const GlobalStyle = createGlobalStyle`
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
  --dark-clr: #2B2B3F;
  --light-clr: #FBECCC;
  --accent-clr: #FBBB9A;
  --text-clr:#FBFBFB;
  }
`;
const App = () => {
  return (
    <>
      <GlobalStyle />
      <AuthWelcomeView />
      {/* <WelcomePage /> */}
      {/* <SignUpFull /> */}
    </>
  );
};

export default App;
