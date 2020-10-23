import React from "react";
import styled from "styled-components";
import HamburgerMenu from "../components/HamburgerMenu";
import HamburgerMenuSrc from "../img/radix-icons_hamburger-menu-dark.svg";
import { authMenuDB } from "../mocks/AuthMenuData.js";
import { StyledSmallButton } from "../components/SmallButton";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 22vh;
  background-color: var(--dark-clr);
  color: var(--light-clr);
  // border: 2px solid red;
`;

const UserDetailsContainer = styled.section`
  display: flex;
  justify-content: center;
  // border: 2px solid blue;
`;

const UserImageWrapper = styled.div`
  display: flex;
`;

const UserImage = styled.img`
  height: 60px;
  width: 60px;
  background-color: var(--light-clr);
  border-radius: 30px;
  margin: 0 5px 0 10px;
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

const TopIconsNavContainer = styled.section`
  display: flex;
  border-radius: 40px 0 0 40px;
  justify-content: flex-end;
  background-color: var(--light-clr);
  padding: 10px 15px 10px 25px;
  gap: 20px;
  // border: 2px solid green;
`;

const ReHamburgerMenu = styled(HamburgerMenu)`
  width: 1.8rem;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 88vh;
  background-color: var(--dark-clr);
  color: var(--light-clr);
  // border: 2px solid orange;
`;

const AuthMenuMobileTabsContainer = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  min-width: 80%;
  max-width: 80%;
`;

// const AuthMenuMobileTab = styled.a`
//   padding: 22px 0 22px 50px;
//   font-weight: 600;
//   font-size: 1.2rem;
// `;

// const ReStyledMediumButton = styled(StyledButton)`
//   background-color: var(--light-clr);
//   color: var(--dark-clr);
//   font-weight: 600;
//   font-size: 1.2rem;
//   margin-top: 22px;
//   margin-left: 50px;
//   padding: 20px 0;
//   width: 15rem;
// `;

// const ReMediumButton = ({ type, label }) => {
//   return <ReStyledMediumButton type={type}>{label}</ReStyledMediumButton>;
// };

const AuthMenuList = styled.ul`
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
`;

const AuthMenuItem = styled.li``;

const AuthMenuOptionIcon = styled.img`
  margin-right: 1.3em;
`;

const AuthMenuLink = styled.a`
  margin-top: 2.3em;
  font-weight: 600;
  color: var(--light-clr);
  display: inline-block;
`;

const CreateProjectButton = styled(StyledSmallButton)`
  background-color: var(--light-clr);
  color: var(--dark-clr);
  padding: 1em 2em;
  width: auto;
  margin-top: 3em;
`;

const AuthNavigationTemplate = () => {
  const authMenuData = authMenuDB;

  const AuthMenuDataComponents = authMenuData.map(({ label, icon }) => {
    return (
      <AuthMenuItem key={label}>
        <AuthMenuOptionIcon src={icon} />
        <AuthMenuLink key={label}>{label}</AuthMenuLink>
      </AuthMenuItem>
    );
  });

  return <>{AuthMenuDataComponents}</>;
};

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
        <TopIconsNavContainer>
          <ReHamburgerMenu src={HamburgerMenuSrc} />
          <ReHamburgerMenu src={HamburgerMenuSrc} />
          <ReHamburgerMenu src={HamburgerMenuSrc} />
        </TopIconsNavContainer>
      </HeaderContainer>
      <MainContainer>
        <AuthMenuMobileTabsContainer>
          <AuthMenuList>
            <AuthNavigationTemplate />
            <CreateProjectButton>Stwórz projekt</CreateProjectButton>
          </AuthMenuList>
        </AuthMenuMobileTabsContainer>
      </MainContainer>
    </>
  );
};

export default AuthMenuMobile;
