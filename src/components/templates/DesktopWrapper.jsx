import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  background-color: var(--light-clr);
`;

const DesktopWrapper = () => {
  return <Container />;
};

export default DesktopWrapper;
