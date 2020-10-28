import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ExitIcon from "../ExitIcon";
import ExitIconSrc from "../../img/exit-icon.svg";

const MainWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.4);
`;

const PopUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 52rem;
  height: auto;
  border-radius: 2rem 2rem 2rem 2rem;
  font-weight: 600;
  background: var(--light-clr);
  color: var(--dark-clr);
`;

const ExitWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin: 1.8rem 1.8rem 0 0;
`;

export const DesktopCommonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  min-width: 90%;
  max-width: 90%;
  padding: 2rem 0;
`;

export const DesktopFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  min-width: 90%;
  max-width: 90%;
  padding: 2rem 0;
`;

const DesktopViewTemplate = ({ children }) => {
  return (
    <MainWrapper>
      <PopUpWrapper>
        <ExitWrapper>
          <Link to="../pages">
            <ExitIcon src={ExitIconSrc} />
          </Link>
        </ExitWrapper>
        {children}
      </PopUpWrapper>
    </MainWrapper>
  );
};

export default DesktopViewTemplate;
