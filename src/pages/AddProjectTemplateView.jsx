import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
// import ExitIconSrc from "../img/exit-icon.svg";

import ExitIconSrc from "../img/exit-dark-icon.svg";

const Heading = styled.h1`
  color: var(--text-color);
  font-size: 1.6rem;

  @media (min-width: 1024px) {
    color: var(--dark-clr);
  }
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 0.5em;
  @media (min-width: 1024px) {
    color: var(--dark-clr);
    font-size: 1.2rem;
  }
`;

const ExitIcon = styled.img``;

const ExitLink = styled.a`
  display: inline-block;
  margin: 1em 2em;
`;

const ExitIconWrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  font-size: 14px;
  background: var(--dark-clr);
`;

const ContentWrapper = styled.section`
  padding: 0 2em;
`;

const StepDotContainer = styled.section`
  display: flex;
  justify-content: center;
  bottom: 1em;
  width: 100%;
  margin: 2em 0;
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
        <MediaQuery maxDeviceWidth={1024}>
          <ExitIconWrapper>
            <ExitLink>
              <ExitIcon src={ExitIconSrc} />
            </ExitLink>
          </ExitIconWrapper>
        </MediaQuery>
        <ContentWrapper>
          <Heading>{props.heading}</Heading>
          <Paragraph>{props.sectionSubtitle}</Paragraph>
          {props.children}
        </ContentWrapper>
        <MediaQuery maxDeviceWidth={1024}>
          <StepDotContainer>
            <StepDot />
            <StepDot />
            <StepDot />
            <StepDot />
          </StepDotContainer>
        </MediaQuery>
      </Container>
    </>
  );
};

export default AddProjectViewTemplate;
