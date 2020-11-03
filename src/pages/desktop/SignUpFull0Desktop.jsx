import React from "react";
import styled from "styled-components";
import SignUpFullImageSrc from "../../img/sign-up-full-image-mobile.svg";
import { RowButtonContainer, Title } from "../../components/SignInUpElements";
import { MainWrapper } from "../../components/templates/MobileViewTemplate";
import MediumButton from "../../components/buttons/MediumButton";
import { HalfDesktopCommonWrapper } from "../../components/templates/DesktopViewTemplate";

const CenterMainWrapper = styled(MainWrapper)`
  justify-content: center;
`;

const SignUpFullImage = styled.img`
  align-self: center;
  width: 25em;
`;

const SignUpFull0Desktop = () => {
  return (
    <CenterMainWrapper>
      <HalfDesktopCommonWrapper>
        <SignUpFullImage src={SignUpFullImageSrc} />
        <Title>Załóż konto w kilku prostych krokach!</Title>
        <RowButtonContainer>
          <MediumButton type={"submit"} label={"Cofnij"} />
          <MediumButton type={"submit"} label={"Tworzę konto"} />
        </RowButtonContainer>
      </HalfDesktopCommonWrapper>
    </CenterMainWrapper>
  );
};

export default SignUpFull0Desktop;
