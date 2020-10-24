import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";

import { StyledSmallButton } from "../components/buttons/SmallButton";
import AddProjectTemplateView from "./AddProjectTemplateView";
const Heading = styled.h1`
  color: var(--text-color);
  font-size: 1.6rem;
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 0.5em;
`;

const Button = styled(StyledSmallButton)`
  width: 8em;
  margin: 2em 0.5em 0 0.5em;
  color: var(--dark-clr);
  background-color: var(--light-clr);
`;

const AddProjectView3 = () => {
  return (
    <>
      <AddProjectTemplateView
        children={
          <>
            <Heading>Wybierz technologie</Heading>
            <Paragraph>Sprecyzuj ich znajomość</Paragraph>
            <Link to="/pages/AddProjectView4">
              <Button>Dalej</Button>
            </Link>
          </>
        }
      ></AddProjectTemplateView>
    </>
  );
};

export default AddProjectView3;
