import React from "react";
import styled from "styled-components";
import ExitIconSrc from "../img/exit-icon.svg";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  background: var(--light-clr);
  color: var(--dark-clr);
  font-weight: 600;
  width: 100vw;
  height: 100vh;
`;

const ExitContainer = styled.section`
  display: flex;
  justify-content: flex-end;
`;

const ExitIcon = styled.img`
  width: 3rem;
  margin-right: 20px;
  padding: 10px;
`;

const ChildrenContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  min-width: 80%;
  max-width: 80%;
`;

const MobileWiewTemplateWithExit = ({ children }) => {
  return (
    <MainContainer>
      <ExitContainer>
        <ExitIcon src={ExitIconSrc} />
      </ExitContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </MainContainer>
  );
};

export default MobileWiewTemplateWithExit;
