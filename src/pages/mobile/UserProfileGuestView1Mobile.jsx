import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ExitIcon from "../../components/ExitIcon";
import ExitIconSrc from "../../img/exit-light-icon.svg";
import FriendsIconSrc from "../../img/friends-icon.svg";

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  font-weight: 600;
  color: var(--dark-clr);
  background: white;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border-radius: 0 0 3rem 3rem;
  background-color: var(--dark-clr);
`;

const ExitIconWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1.8rem 1.8rem 0 1.8rem;
`;

const TopMiddleWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 100%;
`;

const UserImageWrapper = styled.div`
  display: flex;
`;

const UserImage = styled.img`
  height: 8rem;
  width: 8rem;
  background-color: var(--light-clr);
  border-radius: 4rem;
  margin: 0 2rem 0 2rem;
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
        <TopMiddleWrapper>
          <UserImageWrapper>
            <ExitIcon src={FriendsIconSrc} />
            <UserImage></UserImage>
            <ExitIcon src={FriendsIconSrc} />
          </UserImageWrapper>
        </TopMiddleWrapper>
      </TopWrapper>
      <BottomWrapper></BottomWrapper>
    </MainWrapper>
  );
};

export default UserProfileGuestView1Mobile;
