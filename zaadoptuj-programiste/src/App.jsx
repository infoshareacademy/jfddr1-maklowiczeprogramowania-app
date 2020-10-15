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
    font-family: 'Quicksand', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #2B2B3F;
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
