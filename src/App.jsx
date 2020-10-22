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
import AddProjectView0 from "./pages/AddProjectView0";
import AddProjectView1 from "./pages/AddProjectView1";
import AddProjectView2 from "./pages/AddProjectView2";
import AddProjectView3 from "./pages/AddProjectView3";
import AddProjectView4 from "./pages/AddProjectView4";
import AddProjectViewDone from "./pages/AddProjectViewDone";
import Router from "./Router";
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

li {
  list-style:none;
}

`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
      {/* <AddProjectView0 /> */}
      {/* <AddProjectView1 /> */}
      {/* <AddProjectView2 /> */}
      {/* <AddProjectView3 /> */}
      {/* <AddProjectView4 /> */}
      {/* <AddProjectViewDone /> */}
      {/* <AddProjectViewTemplate /> */}
      {/* <AuthMenuMobile /> */}
      {/* <AuthWelcomeView /> */}
      {/* <MenuMobile /> */}
      {/* <Projects /> */}
      {/* <SignIn /> */}
      {/* <SignUpDesktop /> */}
      {/* <SignUpFull1FormMobile />
      <SignUpFull6FormMobile /> */}
      {/* <SignUpMobile /> */}
      {/* <WelcomePage /> */}
    </>
  );
};

export default App;
