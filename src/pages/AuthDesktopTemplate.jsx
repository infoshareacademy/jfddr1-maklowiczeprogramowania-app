import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import MenuMessageIconSrc from "../img/message-icon.svg";
import MenuBellIconSrc from "../img/bell-icon.svg";
import HamburgerMenuSrc from "../img/radix-icons_hamburger-menu-dark.svg";
import { StyledInput } from "../components/Input";
import { getSearchSpecializationTagNames } from "../mocks/SearchTags.js";
import { getProjectsData } from "../mocks/Projects.js";
import { StyledSmallButton } from "../components/SmallButton";
import MediaQuery from "react-responsive";
import UserAvatarImageSrc from "../img/team1.svg";
import { authMenuDB } from "../mocks/AuthMenuData.js";
import MenuImageSrc from "../img/menu-vector-desktop.svg";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 20vh;
  padding: 0 0 0 2em;
  background: var(--dark-clr);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const WelcomeText = styled.p`
  color: var(--light-clr);
  font-size: 1.2rem;
  font-weight: 500;

  @media (min-width: 1024px) {
    color: var(--dark-clr);
    font-size: 2rem;
  }
`;

const NotificationText = styled.p`
  color: var(--light-clr);
  margin-top: 0.2rem;
  font-size: 0.8rem;
  font-weight: 400;
  @media (min-width: 1024px) {
    color: var(--dark-clr);
    font-size: 1.1rem;
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    text-align: left;
    margin-left: 2em;
  }
`;

const AmountOfMessages = styled.span`
  font-weight: 600;
  color: var(--accent-clr);
`;

const MenuIconsAuthBackground = styled.div`
  background: var(--light-clr);
  width: 9em;
  height: 3.5rem;
  border-top-left-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 15px;
`;

const MenuMessageIcon = styled.img`
  width: 1.5rem;
  margin-left: 0.7em;

  @media (min-width: 1024px) {
    width: 1.8rem;
  }
`;

const MenuBellIcon = styled.img`
  width: 1.5rem;
  margin-left: 0.7em;
  @media (min-width: 1024px) {
    width: 1.8rem;
    margin-left: 0.9em;
  }
`;

const HamburgerAuthMenu = styled.img`
  width: 1.5rem;
  margin-left: 0.7em;
`;

// export const MenuIconsAuthBar = () => {
//   return (
//     <MenuIconsAuthBackground>
//       <MenuMessageIcon src={MenuMessageIconSrc} />
//       <MenuBellIcon src={MenuBellIconSrc} />
//       <MediaQuery maxDeviceWidth={1024}>
//         <HamburgerAuthMenu src={HamburgerMenuSrc} />
//       </MediaQuery>
//     </MenuIconsAuthBackground>
//   );
// };

const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 5em auto;
`;

const MainHeading = styled.h2`
  color: var(--dark-clr);
  font-weight: 600;
  margin-bottom: 1em;
`;

const SpecializationTagNameTemplate = styled.div`
  background-color: #e9e9e9;
  padding: 0.5em;
  width: 8em;
  color: #b9b9b9;
  border-radius: 5px;
  margin: 0em 0.5em 0.5em 0;
`;

const DesktopMenuBar = styled.section`
  height: 100vh;
  max-width: 300px;
  display: flex;
  align-items: center;

  flex-direction: column;
  width: 40vw;
  background: var(--dark-clr);
`;

const UserInfo = styled.section`
  text-align: center;
  width: 80%;
  height: 10em;
  margin-top: 4em;
  font-size: 0.7rem;
  color: var(--light-clr);
`;

const UserName = styled.h2`
  font-weight: 400;
  margin-top: 0.5em;
`;

const UserSpecialization = styled.h3`
  font-size: 1rem;
  margin-top: 0.5em;
`;

const UserAvatar = styled.img`
  display: flex;
  width: 3em;
  margin: 0 auto;
`;

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const AuthMenuList = styled.ul`
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
`;

const AuthMenuLink = styled.a`
  margin-top: 2.3em;
  font-weight: 600;
  color: var(--light-clr);
  display: inline-block;
`;

const CreateProjectButton = styled(StyledSmallButton)`
  background-color: var(--light-clr);
  color: var(--dark-clr);
  padding: 1em 2em;
  width: auto;
  margin-top: 3em;
  :hover {
    cursor: pointer;
  }
`;

const AuthMenuOptionIcon = styled.img`
  margin-right: 1.3em;
`;

const AuthMenuItem = styled.li``;

const MenuImage = styled.img`
  position: absolute;
  bottom: 0;
`;

const AuthNavigationTemplate = () => {
  const authMenuData = authMenuDB;

  const AuthMenuDataComponents = authMenuData.map(({ label, icon }) => {
    return (
      <AuthMenuItem key={label}>
        <AuthMenuOptionIcon src={icon} />
        <AuthMenuLink key={label}>{label}</AuthMenuLink>
      </AuthMenuItem>
    );
  });

  return <>{AuthMenuDataComponents}</>;
};

const AuthDesktopTemplate = (props) => {
  return (
    <>
      <PageWrapper>
        <MediaQuery maxDeviceWidth={1024}>
          <Header>
            <MenuIconsAuthBackground>
              <MenuMessageIcon src={MenuMessageIconSrc} />
              <MenuBellIcon src={MenuBellIconSrc} />
              <HamburgerAuthMenu src={HamburgerMenuSrc} />
            </MenuIconsAuthBackground>
          </Header>
        </MediaQuery>
        <MediaQuery minDeviceWidth={1024}>
          <DesktopMenuBar>
            <UserInfo>
              <UserAvatar src={UserAvatarImageSrc} />
              <UserName>Piotr Jarznicki</UserName>
              <UserSpecialization>Front-End Developer</UserSpecialization>
            </UserInfo>
            <AuthMenuList>
              <AuthNavigationTemplate />
              <Link to="/pages/AddProjectView0">
                <CreateProjectButton>Stwórz projekt</CreateProjectButton>
              </Link>
            </AuthMenuList>
            <MenuImage src={MenuImageSrc} />
          </DesktopMenuBar>
        </MediaQuery>
        <Main>{props.children}</Main>
      </PageWrapper>
    </>
  );
};

export default AuthDesktopTemplate;
