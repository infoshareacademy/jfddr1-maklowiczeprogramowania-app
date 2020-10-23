import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AuthWelcomeView from "./pages/AuthWelcomeView";
import SignIn from "./pages/SignIn";
import SignUpDesktop from "./pages/SignUpDesktop";
import SignUpFull1FormMobile from "./pages/signUpFull1Mobile";
import SignUpFull6FormMobile from "./pages/signUpFull6Mobile";
import SignUpFull2FormMobile from "./pages/signUpFull6Mobile";
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
        <Route path="/pages/AddProjectView0">
          <AddProjectView0 />
        </Route>
        <Route path="/pages/AddProjectView1">
          <AddProjectView1 />
        </Route>
        <Route path="/pages/AddProjectView2">
          <AddProjectView2 />
        </Route>
        <Route path="/pages/AddProjectView3">
          <AddProjectView3 />
        </Route>
        <Route path="/pages/AddProjectView4">
          <AddProjectView4 />
        </Route>
        <Route path="/pages/AddProjectViewDone">
          <AddProjectViewDone />
        </Route>
        <Route path="/pages/AuthWelcomeView">
          <AuthWelcomeView />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
        <Route path="/pages/SignUpFull6FormMobile">
          <SignUpFull6FormMobile />
        </Route>
        <Route path="/pages/SignUpFull1FormMobile">
          <SignUpFull1FormMobile />
        </Route>
        <Route path="/pages/SignUpFull2FormMobile">
          <SignUpFull2FormMobile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
