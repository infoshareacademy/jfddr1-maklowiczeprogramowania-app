import React from "react";
import styled from "styled-components";
import MenuMessageIconSrc from "../img/message-icon.svg";
import { useAuth } from "../contexts/AuthContext";
import MenuBellIconSrc from "../img/bell-icon.svg";
import HamburgerMenuSrc from "../img/radix-icons_hamburger-menu-dark.svg";
import MediaQuery from "react-responsive";
import AuthDesktopTemplate, {
  AuthDesktopMain,
} from "../pages/AuthDesktopTemplate";
import SearchProjects from "../pages/SearchProjects";
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
  @media (min-width: 1024px) {
    width: 14em;
  }
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

const MainHeading = styled.h2`
  color: var(--dark-clr);
  font-weight: 600;
  margin-bottom: 1em;
`;

const SearchedProjectsSection = styled.section`
  padding: 2em 2em;
`;

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const UserInformation = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AuthWelcomeView = () => {
  const { currentUserData } = useAuth();
  return (
    <>
      <PageWrapper>
        <MediaQuery maxDeviceWidth={1024}>
          <Header>
            <Wrapper>
              <WelcomeText>
                Cześć, {currentUserData && currentUserData.firstName}!
              </WelcomeText>
              <NotificationText>
                Masz <AmountOfMessages>0</AmountOfMessages> nowych wiadomości
              </NotificationText>
            </Wrapper>
            <MenuIconsAuthBackground>
              <MenuMessageIcon src={MenuMessageIconSrc} />
              <MenuBellIcon src={MenuBellIconSrc} />
              <HamburgerAuthMenu src={HamburgerMenuSrc} />
            </MenuIconsAuthBackground>
          </Header>
        </MediaQuery>

        <AuthDesktopTemplate>
          <AuthDesktopMain
            children={
              <>
                <MediaQuery minDeviceWidth={1024}>
                  <UserInformation>
                    <Wrapper>
                      <WelcomeText>
                        Cześć, {currentUserData && currentUserData.firstName}!
                      </WelcomeText>
                      <NotificationText>
                        Masz <AmountOfMessages>0</AmountOfMessages> nowych
                        wiadomości
                      </NotificationText>
                    </Wrapper>
                    <MenuIconsAuthBackground>
                      <MenuMessageIcon src={MenuMessageIconSrc} />
                      <MenuBellIcon src={MenuBellIconSrc} />
                      <MediaQuery maxDeviceWidth={1024}>
                        <HamburgerAuthMenu src={HamburgerMenuSrc} />
                      </MediaQuery>
                    </MenuIconsAuthBackground>
                  </UserInformation>
                </MediaQuery>

                <MainHeading>Wyszukaj projekt</MainHeading>

                <SearchedProjectsSection>
                  <SearchProjects />
                </SearchedProjectsSection>
              </>
            }
          />
        </AuthDesktopTemplate>
      </PageWrapper>
    </>
  );
};

export default AuthWelcomeView;
