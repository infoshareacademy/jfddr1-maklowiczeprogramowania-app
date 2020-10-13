import React from 'react';
import WelcomePage from './pages/WelcomePage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Quicksand', sans-serif;
    margin:0;
    padding:0;
    box-sizing:border-box;
    color: #FBFBFB;
  }
`
function App() {
  return (
    <>
  <GlobalStyle/>
  <WelcomePage/>
  <SignIn/>
  <SignUp/>
  <Projects/>
</>
  );
}

export default App
