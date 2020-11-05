import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AuthDesktopTemplate from "../AuthDesktopTemplate";
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
  display: flex;
  flex-direction: column;
  // padding: 0 1.8rem;
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
  width: 6rem;
  margin-bottom: -0.9rem;
  padding: 0.4rem;
  text-align: center;
  font-size: 0.8rem;
  border: 0.1rem var(--dark-clr) solid;
  border-radius: 0.6rem;
  outline: none;
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
  font-size: 1.3rem;
  font-weight: 600;
`;

const TechAndToolsItem = styled.div`
  display: inline-block;
  width: 6rem;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  padding: 0.4rem;
  text-align: center;
  font-size: 0.8rem;
  border-radius: 0.6rem;
  background-color: var(--light-clr);
`;

const UserProfileDesktop = () => {
  return (
    <AuthDesktopTemplate>
      <MainWrapper>
        <TopWrapper>
          <UserImageAndTabsWrapper>
            <ActiveTopWrapperTab>Informacje</ActiveTopWrapperTab>
            <TopWrapperTab>Projekty</TopWrapperTab>
            <UserImage src={ProfileImageIconSrc} />
            <TopWrapperTab>Projekty</TopWrapperTab>
            <TopWrapperTab>Nie wiem</TopWrapperTab>
          </UserImageAndTabsWrapper>
          <UserInfoWrapper>
            <UserInfoName>Robert Makłowicz</UserInfoName>
            <UserInfoSpecialization>Front-End Developer</UserInfoSpecialization>
            <UserInfoDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              commodi sequi ullam ipsam unde accusamus maiores atque.
            </UserInfoDescription>
          </UserInfoWrapper>
          <UserInfoIconsContainer>
            <Icon src={GitHubIconSrc} />
            <Icon src={LinkedInIconSrc} />
            <Icon src={PortfolioIconSrc} />
          </UserInfoIconsContainer>
        </TopWrapper>
        <BottomWrapper>
          <TechAndToolsWrapper>
            <TechAndToolsTitle>Technologie</TechAndToolsTitle>
            <TechAndToolsItem>JavaScript</TechAndToolsItem>
            <TechAndToolsItem>TypeScript</TechAndToolsItem>
            <TechAndToolsItem>React</TechAndToolsItem>
          </TechAndToolsWrapper>
          <TechAndToolsWrapper>
            <TechAndToolsTitle>Narzędzia</TechAndToolsTitle>
            <TechAndToolsItem>Git</TechAndToolsItem>
          </TechAndToolsWrapper>
        </BottomWrapper>
      </MainWrapper>
    </AuthDesktopTemplate>
  );
};

export default UserProfileDesktop;
