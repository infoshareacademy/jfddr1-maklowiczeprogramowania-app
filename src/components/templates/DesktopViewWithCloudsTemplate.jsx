import React from "react";
import styled from "styled-components";
import FormDesktopTopRightCloud from "../../img/form-desktop-vector-big.svg";
import FormDesktopBottomRightCloud from "../../img/form-desktop-vector-small.svg";

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: var(--light-clr);
  color: var(--dark-clr);
`;

const FormDesktopTopRightCloudWrapper = styled.img`
  position: absolute;
  top: -5rem;
  right: 0;
  height: 22rem;
  width: 35rem;
`;

const FormDesktopBottomRightCloudWrapper = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 22rem;
  width: 35rem;
`;

const DesktopViewWithCloudsTemplate = ({ children }) => {
  return (
    <MainWrapper>
      <FormDesktopTopRightCloudWrapper src={FormDesktopTopRightCloud} />
      <FormDesktopBottomRightCloudWrapper src={FormDesktopBottomRightCloud} />
      {children}
    </MainWrapper>
  );
};

export default DesktopViewWithCloudsTemplate;
