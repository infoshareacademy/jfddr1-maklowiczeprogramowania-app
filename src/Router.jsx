import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
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

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pages/SignUpDesktop">
          <SignUpDesktop />
        </Route>
        <Route path="/pages/SignIn">
          <SignIn />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
