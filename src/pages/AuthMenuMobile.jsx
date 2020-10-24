import React from "react";
import styled from "styled-components";
import AuthNavigationTemplate from "../components/AuthNavigationTemplate";
import MenuIconsAuthBar from "../components/MenuIconsAuthBar";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 22vh;
  background-color: var(--dark-clr);
  color: var(--light-clr);
`;

const UserDetailsContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const UserImageWrapper = styled.div`
  display: flex;
`;

const UserImage = styled.img`
  height: 56px;
  width: 56px;
  background-color: var(--light-clr);
  border-radius: 28px;
  margin: 0 7px 0 12px;
`;

const UserNameAndSpecWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserName = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
`;

const UserSpecialization = styled.p`
  font-size: 0.8rem;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 88vh;
  background-color: var(--dark-clr);
  color: var(--light-clr);
`;

const AuthMenuMobile = () => {
  return (
    <>
      <HeaderContainer>
        <UserDetailsContainer>
          <UserImageWrapper>
            <UserImage></UserImage>
          </UserImageWrapper>
          <UserNameAndSpecWrapper>
            <UserName>Robert Makłowicz</UserName>
            <UserSpecialization>Front-End Developer</UserSpecialization>
          </UserNameAndSpecWrapper>
        </UserDetailsContainer>
        <MenuIconsAuthBar />
      </HeaderContainer>
      <MainContainer>
        <AuthNavigationTemplate />
      </MainContainer>
    </>
  );
};

export default AuthMenuMobile;
