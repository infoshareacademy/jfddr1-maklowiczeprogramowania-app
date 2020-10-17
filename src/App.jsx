import React from "react";
import { createGlobalStyle } from "styled-components";
import WelcomePage from "./pages/WelcomePage";
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
  }
`;
const App = () => {
  return (
    <>
    <GlobalStyle/>
    <WelcomePage/>
      {/* <SignUpFull /> */}
    </>
  );
};

export default App;
