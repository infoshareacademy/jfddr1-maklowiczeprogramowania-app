import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AuthDesktopTemplate from "../AuthDesktopTemplate";
import ExitIcon from "../../components/ExitIcon";
import ExitIconSrc from "../../img/exit-light-icon.svg";
import FriendsIconSrc from "../../img/friends-icon.svg";
import GitHubIconSrc from "../../img/github-icon.svg";
import MessageIconSrc from "../../img/message-light-icon.svg";
import LinkedInIconSrc from "../../img/linkedin-icon.svg";
import PortfolioIconSrc from "../../img/portfolio-icon.svg";
import ProfileImageIconSrc from "../../img/example-profile-image.svg";

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 5em auto;
  text-align: center;
  font-weight: 600;
  color: var(--dark-clr);
  background: white;
`;

const TopWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.8rem 1.8rem 0 1.8rem;
  border-radius: 0 0 2.3rem 2.3rem;
  background-color: var(--dark-clr);
`;

const ExitIconWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

const UserImageAndIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserImage = styled.img`
  height: 8rem;
  width: 8rem;
  background-color: var(--light-clr);
  border-radius: 4rem;
  margin: 0 1.5rem 0.7rem 1.5rem;
  padding: 1rem;
`;

const IconWithPlusWrapper = styled.div`
  display: flex;
  height: 3.1rem;
  width: 3.1rem;
`;

const Icon = styled.img`
  align-self: center;
  height: 2rem;
  width: 2rem;
`;

const PlusOnIcon = styled.span`
  display: flex;
  align-content: center;
  justify-content: center;
  height: 1.1rem;
  width: 1.1rem;
  line-height: 1rem;
  margin-left: -0.6rem;
  // text-align: center;
  font-size: 0.9rem;
  border-radius: 0.2rem;
  background-color: var(--accent-clr);
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.7rem;
  color: var(--light-clr);
`;

const UserInfoName = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
`;

const UserInfoSpecialization = styled.h1`
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

const TopWrapperTabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
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
          <ExitIconWrapper>
            <Link to="../pages">
              <ExitIcon src={ExitIconSrc} />
            </Link>
          </ExitIconWrapper>
          <UserImageAndIconsWrapper>
            <IconWithPlusWrapper>
              <Icon src={FriendsIconSrc} />
              <PlusOnIcon>+</PlusOnIcon>
            </IconWithPlusWrapper>
            <UserImage src={ProfileImageIconSrc} />
            <IconWithPlusWrapper>
              <Icon src={MessageIconSrc} />
              <PlusOnIcon>+</PlusOnIcon>
            </IconWithPlusWrapper>
          </UserImageAndIconsWrapper>
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
          <TopWrapperTabsContainer>
            <TopWrapperTab>Informacje</TopWrapperTab>
            <TopWrapperTab>Projekty</TopWrapperTab>
            <TopWrapperTab>Nie wiem</TopWrapperTab>
          </TopWrapperTabsContainer>
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
