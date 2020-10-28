import React from "react";
import styled from "styled-components";
import AuthNavigationTemplate from "../../components/templates/AuthNavigationTemplate";
import MenuIconsAuthBar from "../../components/MenuIconsAuthBar";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 22vh;
  background-color: var(--dark-clr);
  color: var(--light-clr);
`;

const UserDetailsWrapper = styled.section`
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

const MainWrapper = styled.main`
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
      <HeaderWrapper>
        <UserDetailsWrapper>
          <UserImageWrapper>
            <UserImage></UserImage>
          </UserImageWrapper>
          <UserNameAndSpecWrapper>
            <UserName>Robert Makłowicz</UserName>
            <UserSpecialization>Front-End Developer</UserSpecialization>
          </UserNameAndSpecWrapper>
        </UserDetailsWrapper>
        <MenuIconsAuthBar />
      </HeaderWrapper>
      <MainWrapper>
        <AuthNavigationTemplate />
      </MainWrapper>
    </>
  );
};

export default AuthMenuMobile;
