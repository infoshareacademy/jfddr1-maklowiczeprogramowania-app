import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import AuthDesktopTemplate from "../../components/templates/AuthDesktopTemplate";
import GitHubIconSrc from "../../img/github-icon.svg";
import LinkedInIconSrc from "../../img/linkedin-icon.svg";
import PortfolioIconSrc from "../../img/portfolio-icon.svg";
import ProfileImageIconSrc from "../../img/example-profile-image.svg";

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 5em auto;
  font-weight: 600;
  color: var(--dark-clr);
  background: white;
`;

const TopWrapper = styled.section`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background-color: var(--dark-clr);
`;

const UserImageAndTabsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -4.7rem;
  gap: 3rem;
`;

const UserImage = styled.img`
  height: 8rem;
  width: 8rem;
  background-color: var(--light-clr);
  border-radius: 4rem;
  margin: 0 1.5rem 0.7rem 1.5rem;
  padding: 1rem;
`;

const Icon = styled.img`
  align-self: center;
  height: 2rem;
  width: 2rem;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 5rem;
  gap: 0.7rem;
  color: var(--light-clr);
`;

const UserInfoName = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
`;

const UserInfoSpecialization = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
`;

const UserInfoDescription = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-clr);
`;

const UserInfoIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
  gap: 3rem;
`;

const TopWrapperTab = styled.button`
  margin-bottom: -0.9rem;
  padding: 1em 2em;
  border: none;
  text-align: center;
  font-size: 0.9rem;
  border-radius: 0.6rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  outline: none;
  color: var(--dark-clr);
  cursor: pointer;
  background-color: var(--light-clr);
`;

const ActiveTopWrapperTab = styled(TopWrapperTab)`
  background-color: var(--accent-clr);
`;

const BottomWrapper = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-self: center;
  padding: 0 1.8rem 1.8rem 1.8rem;
`;

const TechAndToolsWrapper = styled.div`
  margin-top: 1.8rem;
`;

const TechAndToolsTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
`;

const TechAndToolsItem = styled.div`
  display: inline-block;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  padding: 1em 2em;
  text-align: center;
  font-size: 0.8rem;
  border-radius: 0.6rem;
  background-color: var(--light-clr);
  font-size: 1.1rem;
`;

const CustomLink = styled.a`
  text-decoration: none;
`;

const UserTech = ({ currentUserTech }) => {
  const UserTechComponentsArray = currentUserTech.map((tech) => {
    return <TechAndToolsItem>{tech}</TechAndToolsItem>;
  });

  return UserTechComponentsArray;
};

const UserTools = ({ currentUserTools }) => {
  const UserTechComponentsArray = currentUserTools.map((tool) => {
    return <TechAndToolsItem>{tool}</TechAndToolsItem>;
  });

  return UserTechComponentsArray;
};

const UserProfileDesktop = () => {
  const { currentUserData } = useAuth();
  return (
    <>
      {currentUserData &&
        ((
          <AuthDesktopTemplate>
            <MainWrapper>
              <TopWrapper>
                <UserImageAndTabsWrapper>
                  <ActiveTopWrapperTab>Informacje</ActiveTopWrapperTab>
                  <UserImage src={ProfileImageIconSrc} />
                  <TopWrapperTab>Edytuj profil</TopWrapperTab>
                </UserImageAndTabsWrapper>
                <UserInfoWrapper>
                  <UserInfoName>
                    {currentUserData.firstName} {currentUserData.secondName}{" "}
                  </UserInfoName>
                  <UserInfoSpecialization>
                    {currentUserData.specialization}
                  </UserInfoSpecialization>
                  <UserInfoDescription>
                    {currentUserData.description}
                  </UserInfoDescription>
                </UserInfoWrapper>
                <UserInfoIconsContainer>
                  <a
                    href={
                      currentUserData && currentUserData.socialMedia[0].github
                    }
                  >
                    <Icon src={GitHubIconSrc} />
                  </a>
                  <a
                    href={
                      currentUserData && currentUserData.socialMedia[0].linkedIn
                    }
                  >
                    <Icon src={LinkedInIconSrc} />
                  </a>
                  <a
                    href={
                      currentUserData &&
                      currentUserData.socialMedia[0].portfolio
                    }
                  >
                    <Icon src={PortfolioIconSrc} />
                  </a>
                </UserInfoIconsContainer>
              </TopWrapper>
              <BottomWrapper>
                {
                  <TechAndToolsWrapper>
                    <TechAndToolsTitle>Technologie</TechAndToolsTitle>
                    <UserTech currentUserTech={currentUserData.tech} />
                  </TechAndToolsWrapper>
                }

                <TechAndToolsWrapper>
                  <TechAndToolsTitle>Narzędzia</TechAndToolsTitle>
                  <UserTools currentUserTools={currentUserData.tools} />
                </TechAndToolsWrapper>
              </BottomWrapper>
            </MainWrapper>
          </AuthDesktopTemplate>
        ): null)}
    </>
  );
};

export default UserProfileDesktop;
