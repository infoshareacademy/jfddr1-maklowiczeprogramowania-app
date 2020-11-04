import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MediumButton from "../../components/buttons/MediumButton";
import SignUpFullImageSrc from "../../img/sign-up-full-image-mobile.svg";
import { HalfDesktopCommonWrapper } from "../../components/templates/DesktopViewTemplate";
import { MainWrapper } from "../../components/templates/MobileViewTemplate";
import { RowButtonContainer, Title } from "../../components/SignInUpElements";

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
        <RowButtonContainer>
          <MediumButton type="" label="Cofnij" />
          <MediumButton type="" label="Tworzę konto" />
        </RowButtonContainer>
      </HalfDesktopCommonWrapper>
    </CenterMainWrapper>
  );
};

export default SignUpFull0StartDesktop;
