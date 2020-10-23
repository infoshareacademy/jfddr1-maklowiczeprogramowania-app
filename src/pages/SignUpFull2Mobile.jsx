import React from "react";
import styled from "styled-components";
import ExitIconSrc from "srcimgexit-icon.svg";

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
  flex-grow: 1;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 30px 30px 0 0;
`;

const SignUpFull2FormMobile = () => {
  return (
    <MainContainer>
      <ExitContainer>
        <Exit src={ExitIconSrc} />
      </ExitContainer>
    </MainContainer>
  );
};

export default SignUpFull2FormMobile;
