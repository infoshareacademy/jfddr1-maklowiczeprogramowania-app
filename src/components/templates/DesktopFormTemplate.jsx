import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ExitIcon from "../ExitIcon";
import ExitIconSrc from "../../img/exit-icon.svg";

const MainContainer = styled.section`
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

const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 52rem;
  height: auto;
  border-radius: 2rem 2rem 2rem 2rem;
  font-weight: 600;
  background: var(--light-clr);
  color: var(--dark-clr);
`;

const ExitContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin: 1.8rem 1.8rem 0 0;
`;

const DesktopFormTemplate = ({ children }) => {
  return (
    <MainContainer>
      <PopUpContainer>
        <ExitContainer>
          <Link to="../pages">
            <ExitIcon src={ExitIconSrc} />
          </Link>
        </ExitContainer>
        {children}
      </PopUpContainer>
    </MainContainer>
  );
};

export default DesktopFormTemplate;
