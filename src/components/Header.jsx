import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HamburgerMenu from "../components/HamburgerMenu";
import HamburgerMenuSrc from "../img/icons_hamburger-menu-light.svg";
import HeaderImageSrc from "../img/header-image.png";
import MediaQuery from "react-responsive";
import Wrapper from "../components/Wrapper";
import { StyledButton } from "./buttons/Button";

const HeaderHeading = styled.h1`
  font-size: 2.5rem;
  margin: 0em 0 0.5em 0;
  padding: 0 1em 0 1em;

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

const HeroParagraph = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 30px;
  padding: 0 1em;
  margin-top: 0.3em;

  @media (min-width: 700px) {
    padding: 0 3em;
    font-size: 1.3rem;
  }

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

const HamburgerMenuu = styled(HamburgerMenu)`
  position: absolute;
  width: 2em;
  right: 2em;
  top: 2em;
`;

const CreateHeroButton = styled.button`
  padding: 1em 2em;
  margin-top: 2em;
  background: #fbeccc;
  font-family: Quicksand;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  transition: 0.3s;
  border: 2px solid #fbeccc;

  :hover {
    cursor: pointer;
    background: transparent;
    color: var(--light-clr);
  }

  @media (min-width: 1024px) {
    padding: 1em;
    font-size: 1.2rem;
  }
`;

const HowItWorksButton = styled(CreateHeroButton)`
  background: transparent;
  padding: 1em 2em;
  margin-left: 2em;
  border: 2px solid #fbeccc;
  color: #fbeccc;
  border-radius: 4px;

  :hover {
    cursor: pointer;
    background: var(--light-clr);
    color: var(--dark-clr);
  }
`;

const HeaderImage = styled.img`
  @media (min-width: 1024px) {
    width: 30em;
  }

  @media (min-width: 1600px) {
    width: 40rem;
  }
`;

const Hero = styled.section`
  text-align: center;
  margin: 9em 0 0 0;

  @media (min-width: 1024px) {
    margin: 13em 0em 0 5em;
    width: 50%;
    text-align: left;
    font-size: 1.3rem;
    min-width: 40vw;
  }
`;

const DesktopNav = styled.nav`
  position: absolute;
  right: 1rem;
  margin-top: 3em;

  @media (min-width: 1600px) {
    right: 10rem;
  }
`;

const DesktopNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
`;

const DesktopNavListItem = styled.li`
  font-size: 1.2rem;
  font-weight: 500;
`;

const DesktopNavListLink = styled.p`
  display: inline;
  margin-right: 3em;
`;

const FlexContainer = styled.section``;

const StyledHeaderButton = styled(StyledButton)`
  width: 12rem;
  margin-left: 1.5em;
  padding: 1rem 2rem;
  font-size: 1.2rem;
`;

const Header = () => {
  // const rootOverflowHidden = () => {
  //   const root = document.querySelector(":root");

  //   return (root.style.overflow = "hidden");
  // };

  return (
    <Wrapper>
      <MediaQuery maxDeviceWidth={1024}>
        <HamburgerMenuu src={HamburgerMenuSrc} />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1024}>
        <DesktopNav>
          <DesktopNavList>
            <DesktopNavListItem>
              <Link
                style={{ color: "var(--white-clr)", textDecoration: "none" }}
                to="/pages/WelcomePage"
              >
                <DesktopNavListLink>Strona główna</DesktopNavListLink>
              </Link>
            </DesktopNavListItem>
            <DesktopNavListItem>
              <Link
                style={{ color: "var(--white-clr)", textDecoration: "none" }}
                to="/pages/WorkInProgressPage"
              >
                <DesktopNavListLink>Jak to działa?</DesktopNavListLink>
              </Link>
            </DesktopNavListItem>
            <DesktopNavListItem>
              <Link
                style={{ color: "var(--white-clr)", textDecoration: "none" }}
                to="/pages/WorkInProgressPage"
              >
                <DesktopNavListLink>Wiedza o IT</DesktopNavListLink>
              </Link>
            </DesktopNavListItem>
            <DesktopNavListItem>
              <Link to="../pages/SignInDesktop">
                {/* <StyledHeaderButton onClick={rootOverflowHidden}> */}
                <StyledHeaderButton>Zaloguj się</StyledHeaderButton>
              </Link>
            </DesktopNavListItem>
            <DesktopNavListItem>
              <Link to="../pages/SignUpDesktop">
                {/* <StyledHeaderButton onClick={rootOverflowHidden}> */}
                <StyledHeaderButton>Zarejestruj się</StyledHeaderButton>
              </Link>
            </DesktopNavListItem>
          </DesktopNavList>
        </DesktopNav>
      </MediaQuery>
      <Hero>
        <HeaderHeading>
          Bądź częścią czegoś{" "}
          <span style={{ color: "#FBECCC" }}> wielkiego. </span>{" "}
        </HeaderHeading>
        <HeroParagraph>
          Przedstaw światu swój pomysł i zbierz odpowiedni zespół, z którym
          wspólnie zbudujecie solidny produkt!
        </HeroParagraph>
        <HeroParagraph>
          Opisz nad czym chciałbyś pracować i kogo poszukujesz do wspólnej
          przygody! Czas spełnić swoje marzenia!
        </HeroParagraph>
        <MediaQuery maxDeviceWidth={1023}>
          <Link to="../pages/SignUpMobile">
            <CreateHeroButton>Stwórz bohatera</CreateHeroButton>
          </Link>
        </MediaQuery>
        <MediaQuery minDeviceWidth={1024}>
          <Link to="../pages/SignUpDesktop">
            <CreateHeroButton>Stwórz bohatera</CreateHeroButton>
          </Link>
        </MediaQuery>
        <Link to="../pages/WorkInProgressPage">
          <HowItWorksButton>Jak to działa?</HowItWorksButton>
        </Link>
      </Hero>
      <FlexContainer>
        <MediaQuery minDeviceWidth={1024}>
          <HeaderImage src={HeaderImageSrc} />
        </MediaQuery>
      </FlexContainer>
    </Wrapper>
  );
};

export default Header;
