import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useProject } from "../contexts/ProjectsContext";
import { StyledSmallButton } from "../components/buttons/SmallButton";
import AddProjectViewTemplate from "../components/templates/AddProjectViewTemplate";
import ImageSrc from "../img/project-done-light.svg";

const Image = styled.img`
  width: 18em;
  margin-bottom: 5rem;
`;

const Heading = styled.h1`
  margin: 0.5em 0;
  font-size: 2.5rem;
  color: var(--text-color);
`;

const Paragraph = styled.p`
  margin-top: 0.5em;
  font-size: 1.1rem;
  font-weight: 500;
`;

const Button = styled(StyledSmallButton)`
  width: 11em;
  margin: 2em 0.5em 0 0.5em;
  color: var(--dark-clr);
  background-color: var(--light-clr);

  @media (min-width: 1024px) {
    margin: 4em auto;
  }
`;

const ProjectName = styled.span`
  font-weight: 600;
  color: var(--accent-clr);
`;

const AddProjectViewDone = () => {
  const { project } = useProject();
  return (
    <>
      <AddProjectViewTemplate
        children={
          <>
            <Image src={ImageSrc} />
            <Heading>Gratulacje!</Heading>
            <Paragraph>
              Projekt <ProjectName>{project.title}</ProjectName> został dodany!
            </Paragraph>
            <Link to="/pages/AuthWelcomeView">
              <Button>Wyjdź</Button>
            </Link>
          </>
        }
      ></AddProjectViewTemplate>
    </>
  );
};

export default AddProjectViewDone;
