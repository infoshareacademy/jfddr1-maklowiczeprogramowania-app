import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import AddProjectView0 from "./pages/AddProjectView0";
import AddProjectView1 from "./pages/AddProjectView1";
import AddProjectView2 from "./pages/AddProjectView2";
import AddProjectView3 from "./pages/AddProjectView3";
import AddProjectView4 from "./pages/AddProjectView4";
import AddProjectViewDone from "./pages/AddProjectViewDone";
import AuthMenuMobile from "./pages/mobile/AuthMenuMobile";
import AuthWelcomeView from "./pages/AuthWelcomeView";
import MenuMobile from "./pages/mobile/MenuMobile";
import Projects from "./pages/Projects";
import SignInDesktop from "./pages/desktop/SignInDesktop";
import SignUpDesktop from "./pages/desktop/SignUpDesktop";
import SignUpFull1Mobile from "./pages/mobile/SignUpFull1Mobile";
import SignUpFull2Mobile from "./pages/mobile/SignUpFull2Mobile";
import SignUpFull3Mobile from "./pages/mobile/SignUpFull3Mobile";
import SignUpFull4Mobile from "./pages/mobile/SignUpFull4Mobile";
import SignUpFull5Mobile from "./pages/mobile/SignUpFull5Mobile";
import SignUpFull6Mobile from "./pages/mobile/SignUpFull6Mobile";
import SignUpFull7Mobile from "./pages/mobile/SignUpFull7Mobile";
import SignUpMobile from "./pages/mobile/SignUpMobile";
import UserProfileGuestView1Mobile from "./pages/mobile/UserProfileGuestView1Mobile";
import WelcomePage from "./pages/WelcomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/pages/SignUpDesktop">
          <SignUpDesktop />
        </Route> */}
        {/* <Route path="/pages/SignInDesktop">
          <SignInDesktop />
        </Route> */}
        <PrivateRouter
          exact
          path="/pages/AddProjectView0"
          component={AddProjectView0}
        ></PrivateRouter>
        <PrivateRouter
          exact
          path="/pages/AddProjectView1"
          component={AddProjectView1}
        ></PrivateRouter>
        <PrivateRouter
          exact
          path="/pages/AddProjectView2"
          component={AddProjectView2}
        ></PrivateRouter>
        <PrivateRouter
          exact
          path="/pages/AddProjectView3"
          component={AddProjectView3}
        ></PrivateRouter>
        <PrivateRouter
          exact
          path="/pages/AddProjectView4"
          component={AddProjectView4}
        ></PrivateRouter>
        <PrivateRouter
          exact
          path="/pages/AddProjectViewDone"
          component={AddProjectViewDone}
        ></PrivateRouter>
        <PrivateRouter
          exact
          path="/pages/AuthWelcomeView"
          component={AuthWelcomeView}
        ></PrivateRouter>
        <Route path="/pages/MenuMobile">
          <MenuMobile />
        </Route>
        <Route path="/pages/AuthMenuMobile">
          <AuthMenuMobile />
        </Route>
        <Route path="/pages/SignUpMobile">
          <SignUpMobile />
        </Route>
        <Route path="/pages/SignUpFull1Mobile">
          <SignUpFull1Mobile />
        </Route>
        <Route path="/pages/SignUpFull2Mobile">
          <SignUpFull2Mobile />
        </Route>
        <Route path="/pages/SignUpFull3Mobile">
          <SignUpFull3Mobile />
        </Route>
        <Route path="/pages/SignUpFull4Mobile">
          <SignUpFull4Mobile />
        </Route>
        <Route path="/pages/SignUpFull5Mobile">
          <SignUpFull5Mobile />
        </Route>
        <Route path="/pages/SignUpFull6Mobile">
          <SignUpFull6Mobile />
        </Route>
        <Route path="/pages/SignUpFull7Mobile">
          <SignUpFull7Mobile />
        </Route>
        <Route path="/pages/UserProfileGuestView1Mobile">
          <UserProfileGuestView1Mobile />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
      <Route path="/pages/SignUpDesktop">
        <SignUpDesktop />
      </Route>
      <Route path="/pages/SignInDesktop">
        <SignInDesktop />
      </Route>
    </BrowserRouter>
  );
};

export default Router;
