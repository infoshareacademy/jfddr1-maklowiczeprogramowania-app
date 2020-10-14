import React from 'react';
import WelcomePage from './pages/WelcomePage'
import Menu from './pages/Menu'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family:'Quicksand', sans-serif;
    margin:0;
    padding:0 ;
    width:100vw;
    color:#FBFBFB;
    overflow-x:hidden;
  }

* {
  box-sizing:border-box;
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
