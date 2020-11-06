import React from "react";
import styled from "styled-components";
import MenuMessageIconSrc from "../img/message-icon.svg";
import { useAuth } from "../contexts/AuthContext";
import MenuBellIconSrc from "../img/bell-icon.svg";
import HamburgerMenuSrc from "../img/radix-icons_hamburger-menu-dark.svg";
import { StyledInput } from "../components/Input";
import { getSearchSpecializationTagNames } from "../mocks/SearchTags.js";
import { getProjectsData } from "../mocks/Projects.js";
import { StyledSmallButton } from "../components/buttons/SmallButton";
import MediaQuery from "react-responsive";
import AuthDesktopTemplate, {
  AuthDesktopMain,
} from "../components/templates/AuthDesktopTemplate";

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

const SearchInput = styled(StyledInput)`
  background-color: #e9e9e9;
  width: 70%;
  max-width: 700px;
`;

const MainHeading = styled.h2`
  color: var(--dark-clr);
  font-weight: 600;
  margin-bottom: 1em;
`;

const SubmitSearchButton = styled.button`
  height: 50px;
  background-color: #e9e9e9;
  color: #b9b9b9;
  width: 30%;
  max-width: 200px;
  margin-left: 1em;
  font-family: Quicksand;
  font-weight: 500;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 2em;
`;

const SpecializationTagNameTemplate = styled.div`
  background-color: #e9e9e9;
  padding: 0.5em;
  width: 8em;
  color: #b9b9b9;
  border-radius: 5px;
  margin: 0em 0.5em 0.5em 0;
`;

const SearchTagSpecializationComponentsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1em 2em;
`;

const SearchedProjectsSection = styled.section`
  padding: 2em 2em;
`;

const ProjectText = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.5em;
`;

const SearchedProject = styled.article`
  display: flex;
  height: auto;
  height: 40vh;
  margin-bottom: 4em;
  position: relative;
  color: var(--dark-clr);
  background-color: #e9e9e9;
  text-align: left;
  border-radius: 4px;

  @media (min-width: 1024px) {
    height: 25vh;
  }
`;

const ProjectTitle = styled.h3`
var(--dark-clr);
`;

const ProjectDescription = styled.p`
var(--dark-clr);
font-size:.9rem;
padding:.5em 1em;
font-weight:400;
`;

const ProjectImage = styled.img`
  width: 10em;
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const EvenSmallerButton = styled(StyledSmallButton)`
  padding: 10px 5px;
  position: absolute;
  background-color: var(--dark-clr);
  border: none;
  bottom: -20px;
  width: 8em;
  right: 0;
  white-space: nowrap;
  font-size: 0.8rem;
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

// const UserName = styled.h2`
//   font-weight: 400;
//   margin-top: 0.5em;
// `;

const SpecializationTagTemplate = ({ tagName }) => {
  return (
    <SpecializationTagNameTemplate>{tagName}</SpecializationTagNameTemplate>
  );
};

const ProjectTemplate = ({
  projectTitle,
  projectDescription,
  projectImgSrc,
}) => {
  return (
    <SearchedProject>
      <ProjectImage src={projectImgSrc}></ProjectImage>
      <ProjectText>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <ProjectDescription>{projectDescription}</ProjectDescription>
        <EvenSmallerButton>Zobacz projekt</EvenSmallerButton>
      </ProjectText>
    </SearchedProject>
  );
};

const AuthWelcomeView = () => {
  const { currentUserData } = useAuth();
  const searchTagSpecializationNamesData = getSearchSpecializationTagNames();
  const searchTagSpecializationNamesComponents = searchTagSpecializationNamesData.map(
    ({ tagName }) => {
      return <SpecializationTagTemplate key={tagName} tagName={tagName} />;
    }
  );

  const searchedProjectData = getProjectsData();
  const searchedProjectsComponents = searchedProjectData.map(
    ({ projectTitle, projectDescription, projectImgSrc }) => {
      return (
        <ProjectTemplate
          key={projectTitle}
          projectTitle={projectTitle}
          projectDescription={projectDescription}
          projectImgSrc={projectImgSrc}
        />
      );
    }
  );

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
                <SearchWrapper>
                  <SearchInput />
                  <SubmitSearchButton>Szukaj</SubmitSearchButton>
                </SearchWrapper>
                <SearchTagSpecializationComponentsWrapper>
                  {searchTagSpecializationNamesComponents}
                </SearchTagSpecializationComponentsWrapper>
                <SearchedProjectsSection>
                  {searchedProjectsComponents}
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
