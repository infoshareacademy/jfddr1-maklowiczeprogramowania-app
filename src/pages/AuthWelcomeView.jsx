import React from "react";
import styled from "styled-components";
import MenuMessageIconSrc from "../img/Message-icon.svg";
import MenuBellIconSrc from "../img/Bell-icon.svg";
import HamburgerMenuSrc from "../img/radix-icons_hamburger-menu-dark.svg";
import { StyledInput } from "../components/Input";
import { getSearchSpecializationTagNames } from "../mocks/SearchTags.js";
import { getProjectsData } from "../mocks/Projects.js";
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
`;

const NotificationText = styled.p`
  color: var(--light-clr);
  margin-top: 0.2rem;
  font-size: 0.8rem;
  font-weight: 400;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
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
`;

const MenuBellIcon = styled.img`
  width: 1.5rem;
  margin-left: 0.7em;
`;

const HamburgerAuthMenu = styled.img`
  width: 1.5rem;
  margin-left: 0.7em;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 5em auto;
`;

const SearchInput = styled(StyledInput)`
  margin: 0 auto;
  background-color: #e9e9e9;
  width: 15rem;
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
  width: 7em;
  margin-left: 0.5em;
  font-family: Quicksand;
  font-weight: 500;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
`;

const SearchWrapper = styled.div`
display:flex;
justify-content-center;
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
  //   border: 1px solid green;
`;

const SearchedProjectsSection = styled.section`
  padding: 2em 2em;
`;

const SpecializationTagTemplate = ({ tagName }) => {
  return (
    <SpecializationTagNameTemplate>{tagName}</SpecializationTagNameTemplate>
  );
};

const SearchedProject = styled.article`
  display: flex;
  height: 25vh;
  margin-bottom: 4em;
  color: var(--dark-clr);
  background-color: #e9e9e9;
  border-radius: 4px;
`;

const ProjectTitle = styled.h3`
var(--dark-clr);
`;

const ProjectDescription = styled.p`
var(--dark-clr);
`;

const ProjectImage = styled.img`
  width: 10em;
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const ProjectTemplate = ({
  projectTitle,
  projectDescription,
  projectImgSrc,
}) => {
  return (
    <SearchedProject>
      <ProjectImage src={projectImgSrc}></ProjectImage>
      <ProjectTitle>{projectTitle}</ProjectTitle>
      <ProjectDescription>{projectDescription}</ProjectDescription>
    </SearchedProject>
  );
};

const AuthWelcomeView = () => {
  const searchTagSpecializationNamesData = getSearchSpecializationTagNames();
  const searchTagSpecializationNamesComponents = searchTagSpecializationNamesData.map(
    ({ tagName }) => {
      console.log(tagName);
      return <SpecializationTagTemplate key={tagName} tagName={tagName} />;
    }
  );

  const searchedProjectData = getProjectsData();
  const searchedProjectsComponents = searchedProjectData.map(
    ({ projectTitle, projectDescription, projectImgSrc }) => {
      console.log(projectImgSrc);
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
      <Header>
        <Wrapper>
          <WelcomeText>Cześć, Piotr!</WelcomeText>
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
      <Main>
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
      </Main>
    </>
  );
};

export default AuthWelcomeView;
