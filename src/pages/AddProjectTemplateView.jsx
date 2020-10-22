import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import ExitIconSrc from "../img/exit-icon.svg";
const ExitIcon = styled.img``;

const ExitLink = styled.a`
  display: inline-block;
  margin: 1em 2em;
  // position: absolute;
`;
const ExitIconWrapper = styled.section`
  display: flex;
  // margin: 2em 0;
  // border: 1px solid red;
  // margin-bottom: 2em;
  width: 100%;
  justify-content: flex-end;
  //   border: 1px solid red;
`;
const Container = styled.section`
  display: flex;
  font-size: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  background: var(--dark-clr);
`;

const ContentWrapper = styled.section`
  padding: 0 2em;
  // margin-top: -2em;
  //   border: 1px solid red;
`;

const StepDotContainer = styled.section`
  display: flex;
  // position: absolute;
  bottom: 1em;

  justify-content: center;
  //   justify-self: flex-end;
  //   border: 1px solid yellow;
  margin: 2em 0;
  width: 100%;
`;

const StepDot = styled.div`
  width: 0.5em;
  height: 0.5em;
  margin-right: 0.5em;
  margin-left: 0.5em;
  background: var(--light-clr);
  border-radius: 50%;
`;

const AddProjectViewTemplate = (props) => {
  return (
    <>
      <Container>
        <ExitIconWrapper>
          <ExitLink>
            <ExitIcon src={ExitIconSrc} />
          </ExitLink>
        </ExitIconWrapper>
        <ContentWrapper>{props.children}</ContentWrapper>

        <StepDotContainer>
          <StepDot />
          <StepDot />
          <StepDot />
          <StepDot />
        </StepDotContainer>
      </Container>
    </>
  );
};

export default AddProjectViewTemplate;
