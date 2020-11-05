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
import SignInMobile from "./pages/mobile/SignInMobile";
import SignUpDesktop from "./pages/desktop/SignUpDesktop";
import SignUpFull0StartMobile from "./pages/mobile/SignUpFull0StartMobile";
import SignUpFull1Mobile from "./pages/mobile/SignUpFull1Mobile";
import SignUpFull2Mobile from "./pages/mobile/SignUpFull2Mobile";
import SignUpFull3Mobile from "./pages/mobile/SignUpFull3Mobile";
import SignUpFull4Mobile from "./pages/mobile/SignUpFull4Mobile";
import SignUpFull5Mobile from "./pages/mobile/SignUpFull5Mobile";
import SignUpFull6Mobile from "./pages/mobile/SignUpFull6Mobile";
import SignUpFull7DoneMobile from "./pages/mobile/SignUpFull7DoneMobile";
import SignUpMobile from "./pages/mobile/SignUpMobile";
import SignUpFull0StartDesktop from "./pages/desktop/SignUpFull0StartDesktop";
import SignUpFull1Desktop from "./pages/desktop/SignUpFull1Desktop";
import SignUpFull2Desktop from "./pages/desktop/SignUpFull2Desktop";
import SignUpFull3Desktop from "./pages/desktop/SignUpFull3Desktop";
import SignUpFull4Desktop from "./pages/desktop/SignUpFull4Desktop";
import SignUpFull5Desktop from "./pages/desktop/SignUpFull5Desktop";
import SignUpFull6Desktop from "./pages/desktop/SignUpFull6Desktop";
import SignUpFull7DoneDesktop from "./pages/desktop/SignUpFull7DoneDesktop";
import UserProfileDesktop from "./pages/desktop/UserProfileDesktop";
import UserProfileGuestView1Mobile from "./pages/mobile/UserProfileGuestView1Mobile";
import WelcomePage from "./pages/WelcomePage";
import AuthDesktopTemplate from "./pages/AuthDesktopTemplate";
import NotificationDesktop from "./pages/desktop/NotificationDesktop";

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
        <Route path="/pages/AuthWelcomeView">
          <AuthWelcomeView />
        </Route>
        <Route path="/pages/MenuMobile">
          <MenuMobile />
        </Route>
        <Route path="/pages/AuthMenuMobile">
          <AuthMenuMobile />
        </Route>
        <Route path="/pages/SignUpMobile">
          <SignUpMobile />
        </Route>
        <Route path="/pages/SignInMobile">
          <SignInMobile />
        </Route>
        <Route path="/pages/SignUpFull0StartMobile">
          <SignUpFull0StartMobile />
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
        <Route path="/pages/SignUpFull7DoneMobile">
          <SignUpFull7DoneMobile />
        </Route>
        <Route path="/pages/SignUpFull0StartDesktop">
          <SignUpFull0StartDesktop />
        </Route>
        <Route path="/pages/SignUpFull1Desktop">
          <SignUpFull1Desktop />
        </Route>
        <Route path="/pages/SignUpFull2Desktop">
          <SignUpFull2Desktop />
        </Route>
        <Route path="/pages/SignUpFull3Desktop">
          <SignUpFull3Desktop />
        </Route>
        <Route path="/pages/SignUpFull4Desktop">
          <SignUpFull4Desktop />
        </Route>
        <Route path="/pages/SignUpFull5Desktop">
          <SignUpFull5Desktop />
        </Route>
        <Route path="/pages/SignUpFull6Desktop">
          <SignUpFull6Desktop />
        </Route>
        <Route path="/pages/SignUpFull7DoneDesktop">
          <SignUpFull7DoneDesktop />
        </Route>
        <Route path="/pages/UserProfileGuestView1Mobile">
          <UserProfileGuestView1Mobile />
        </Route>
        <Route path="/pages/UserProfileDesktop">
          <WelcomePage />
        </Route>
        <Route path="/">
          <NotificationDesktop />
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
