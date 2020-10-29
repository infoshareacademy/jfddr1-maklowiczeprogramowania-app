import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ExitIcon from "../../components/ExitIcon";
import ExitIconSrc from "../../img/exit-light-icon.svg";
import FriendsIconSrc from "../../img/friends-icon.svg";
import GitHubIconSrc from "../../img/github-icon.jpg";
import MessageIconSrc from "../../img/message-light-icon.svg";
import LinkedInIconSrc from "../../img/linkedin-icon.svg";
import ProfileImageIconSrc from "../../img/example-profile-image.svg";

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  font-weight: 600;
  color: var(--dark-clr);
  background: white;
`;

const TopWrapper = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 1.8rem 1.8rem 0 1.8rem;
  border-radius: 0 0 3rem 3rem;
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
  margin: 1rem 1.5rem;
  padding: 1rem;
`;

const Icon = styled.img`
  height: 2.4rem;
  width: 2.4rem;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  color: var(--light-clr);
`;

const UserInfoName = styled.h2``;

const UserInfoSpecialization = styled.h1``;

const UserInfoDescription = styled.p``;

const UserInfoIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
  gap: 3rem;
`;

const BottomWrapper = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-self: center;
  justify-self: center;
`;

const UserProfileGuestView1Mobile = () => {
  return (
    <MainWrapper>
      <TopWrapper>
        <ExitIconWrapper>
          <Link to="../pages">
            <ExitIcon src={ExitIconSrc} />
          </Link>
        </ExitIconWrapper>
        <UserImageAndIconsWrapper>
          <Icon src={FriendsIconSrc} />
          <UserImage src={ProfileImageIconSrc} />
          <Icon src={MessageIconSrc} />
        </UserImageAndIconsWrapper>
        <UserInfoWrapper>
          <UserInfoName>Robert Makłowicz</UserInfoName>
          <UserInfoSpecialization>Front-End Developer</UserInfoSpecialization>
          <UserInfoDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            commodi sequi ullam ipsam unde accusamus maiores atque asperiores
            sit aut quasi eius, laboriosam sapiente, dolor debitis earum facere!
            Eligendi, natus?
          </UserInfoDescription>
        </UserInfoWrapper>
        <UserInfoIconsContainer>
          <Icon src={GitHubIconSrc} />
          <Icon src={LinkedInIconSrc} />
          <Icon src={MessageIconSrc} />
        </UserInfoIconsContainer>
      </TopWrapper>
      <BottomWrapper></BottomWrapper>
    </MainWrapper>
  );
};

export default UserProfileGuestView1Mobile;
