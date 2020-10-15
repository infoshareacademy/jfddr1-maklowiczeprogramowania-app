import React from 'react';
import WelcomePage from './pages/WelcomePage'
import MobMenu from './pages/MobMenu'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
import { createGlobalStyle } from 'styled-components'
import MobLabeLWithInput from "./components/MobLabelWithInput"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing:border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Quicksand', sans-serif;
    width: 100vw;
    color:#FBFBFB;
    overflow-x:hidden;
  }
`
const App = () => {
  return (
    <>
  <GlobalStyle/>
  <SignIn/>
</>
  );
}

export default App
