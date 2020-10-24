import React from "react";
import { createGlobalStyle } from "styled-components";
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
    </>
  );
};

export default App;
