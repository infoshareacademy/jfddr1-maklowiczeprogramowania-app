import React from "react";
import { useProject } from "../contexts/ProjectsContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledInput } from "../components/Input";
import { getSearchSpecializationTagNames } from "../mocks/SearchTags.js";
import { StyledSmallButton } from "../components/buttons/SmallButton";
import Checkboxes from "../components/Checkboxes";
import { ThematicTagTemplate } from "../components/tags/ThematicTag";

export const ProjectTitle = styled.h3`
font-size:1.4rem;
var(--dark-clr);
margin-left:1em;
`;

export const ProjectDescription = styled.p`
var(--dark-clr);
font-size:1rem;
padding:.5em 1em;
font-weight:500;
`;

export const TitleImage = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ProjectImageContainer = styled.div`
  border-radius: 50%;
  width: 5em;
  height: 5em;
  background: var(--dark-clr);
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const EvenSmallerButton = styled(StyledSmallButton)`
  padding: 10px 5px;
  position: absolute;
  background-color: var(--dark-clr);
  border: none;
  bottom: -20px;
  width: 10em;
  right: 0;
  white-space: nowrap;
  font-size: 0.9rem;
`;

export const ProjectTagsContainer = styled.section`
  display: flex;
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
`;

export const ProjectText = styled.section`
  display: flex;
  flex-direction: column;
  line-height: 25px;
  padding: 0.5em;
`;

export const SearchedProject = styled.article`
  display: flex;
  padding: 1.5em;
  box-shadow: 3px 3px 15px 3px #d6d6d6;
  flex-direction: column;
  height: 40vh;
  margin-bottom: 2.5em;
  position: relative;
  color: var(--dark-clr);
  background-color: #fcfcfc;
  text-align: left;
  border-radius: 4px;

  @media (min-width: 1024px) {
    height: 30vh;
    width: 70%;
  }
`;

const SearchInput = styled(StyledInput)`
  background-color: #e9e9e9;
  width: 60%;
  color: var(--dark-clr);

  ::placeholder {
    color: #c5c5c5;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SearchProjects = () => {
  const searchInputRef = React.createRef();
  const {
    initialState,
    setInitialState,
    projectsState,
    setProjectsState,
  } = useProject();

  const handleChange = (e) => {
    const userInput = searchInputRef.current.value;
    if (userInput.length > 0) {
      const newProjectsState = initialState.filter((project) =>
        project.title.includes(userInput) ? project : null
      );
      setProjectsState(newProjectsState);
    } else {
      setProjectsState(initialState);
    }
  };

  const ProjectTemplate = ({
    projectTitle,
    projectDescription,
    projectImgSrc,
    projectTags,
    projectId,
  }) => {
    return (
      <>
        <SearchedProject>
          <TitleImage>
            <ProjectImageContainer>
              <ProjectImage src={projectImgSrc}></ProjectImage>
            </ProjectImageContainer>
            <ProjectTitle>{projectTitle}</ProjectTitle>
          </TitleImage>

          <ProjectText>
            <ProjectDescription>{projectDescription}</ProjectDescription>
            <ProjectTagsContainer>{projectTags}</ProjectTagsContainer>
            <Link to={`/pages/projects/${projectId}`}>
              {" "}
              <EvenSmallerButton>Zobacz projekt</EvenSmallerButton>
            </Link>
          </ProjectText>
        </SearchedProject>
      </>
    );
  };

  const FirestoreProjects = () => {
    const searchedProjectsComponents = projectsState.map(
      ({ title, description, tags, id }) => {
        tags = tags.map((tag) => {
          return <ThematicTagTemplate key={tag} label={tag} />;
        });

        return (
          <ProjectTemplate
            key={title}
            projectTitle={title}
            projectTags={tags}
            projectDescription={description}
            projectId={id}
          />
        );
      }
    );

    return searchedProjectsComponents;
  };

  return (
    <>
      <SearchWrapper>
        <SearchInput
          onChange={handleChange}
          ref={searchInputRef}
          placeholder="Wyszukaj projekt po tytule"
        />
      </SearchWrapper>
      <Checkboxes
        projectsState={projectsState}
        setInitialState={setInitialState}
        setProjectsState={setProjectsState}
        initialState={initialState}
      />
      {projectsState && <FirestoreProjects />}
    </>
  );
};

export default SearchProjects;
