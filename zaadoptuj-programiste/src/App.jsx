import React from 'react';
import WelcomePage from './pages/WelcomePage'
import Menu from './pages/Menu'
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
    color: #2B2B3F;
  }
`
function App() {
  return (
    <>
  <GlobalStyle/>
  <Menu/>
</>
  );
}

export default App
