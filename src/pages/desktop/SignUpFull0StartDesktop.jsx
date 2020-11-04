import React from "react";
import styled from "styled-components";
import SignUpFullImageSrc from "../../img/sign-up-full-image-mobile.svg";
import { HalfDesktopCommonWrapper } from "../../components/templates/DesktopViewTemplate";
import { MainWrapper } from "../../components/templates/MobileViewTemplate";
import {
  DesktopLinkButton,
  DesktopCenterRowButtonContainer,
  Title,
} from "../../components/SignInUpElements";

const CenterMainWrapper = styled(MainWrapper)`
  justify-content: center;
`;

const SignUpFullImage = styled.img`
  align-self: center;
  width: 25em;
`;

const SignUpFull0StartDesktop = () => {
  return (
    <CenterMainWrapper>
      <HalfDesktopCommonWrapper>
        <SignUpFullImage src={SignUpFullImageSrc} />
        <Title>Załóż konto w kilku prostych krokach!</Title>
        <DesktopCenterRowButtonContainer>
          <DesktopLinkButton to="/pages/WelcomePage">Cofnij</DesktopLinkButton>
          <DesktopLinkButton to="/pages/SignUpFull1Desktop">
            Załóż konto
          </DesktopLinkButton>
        </DesktopCenterRowButtonContainer>
      </HalfDesktopCommonWrapper>
    </CenterMainWrapper>
  );
};

export default SignUpFull0StartDesktop;
