import React from "react";
import styled from "styled-components";
import ExitIconSrc from "../../img/exit-icon.svg";

const PopUpContainer = styled.div`
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

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: 35rem;
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

const ExitIcon = styled.img`
  width: 3rem;
  margin-right: 1.6rem;
  padding: 0.6rem;
`;

const ChildrenContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  min-width: 80%;
  max-width: 80%;
  padding: 2rem 0;
`;

const DesktopFormTemplate = ({ children }) => {
  return (
    <PopUpContainer>
      <MainContainer>
        <ExitContainer>
          <ExitIcon src={ExitIconSrc} />
        </ExitContainer>
        <ChildrenContainer>{children}</ChildrenContainer>
      </MainContainer>
    </PopUpContainer>
  );
};

export default DesktopFormTemplate;
