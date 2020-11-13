import React from "react";
import { useProject } from "../contexts/ProjectsContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledInput } from "../components/Input";
import { getSearchSpecializationTagNames } from "../mocks/SearchTags.js";
import { StyledSmallButton } from "../components/buttons/SmallButton";
import Checkboxes from "../components/Checkboxes";
import projectImgSrc from "../img/Makłowicz.jpg";
const ProjectTitle = styled.h3`
font-size:1.4rem;
var(--dark-clr);
margin-left:1em;
`;

const ProjectDescription = styled.p`
var(--dark-clr);
font-size:1rem;
padding:.5em 1em;
font-weight:500;
`;

const TitleImage = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ProjectImageContainer = styled.div`
  border-radius: 50%;
  width: 5em;
  height: 5em;
  background: var(--dark-clr);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const EvenSmallerButton = styled(StyledSmallButton)`
  padding: 10px 5px;
  position: absolute;
  background-color: var(--dark-clr);
  border: none;
  bottom: -20px;
  width: 8em;
  right: 0;
  white-space: nowrap;
  font-size: 0.8rem;
`;

const ProjectTagsContainer = styled.section`
  display: flex;
  position: absolute;
  bottom: 0;
`;

const ProjectText = styled.section`
  display: flex;
  line-height: 25px;
  flex-direction: column;
  padding: 0.5em;
`;

const SearchedProject = styled.article`
  display: flex;
  padding: 2em;
  box-shadow: 3px 3px 15px 3px #d6d6d6;
  flex-direction: column;
  height: 40vh;
  margin: 0 auto;
  margin-bottom: 4em;
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
  width: 70%;
  max-width: 700px;

  color: var(--dark-clr);
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  margin: 0 0 4em 0;
  padding: 0 2em;
`;

const SubmitSearchButton = styled.button`
  height: 50px;
  background-color: #e9e9e9;
  color: #b9b9b9;
  width: 30%;
  max-width: 200px;
  margin-left: 1em;
  font-family: Quicksand;
  font-weight: 500;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
`;

const SpecializationTagNameTemplate = styled.div`
  background-color: #e9e9e9;
  padding: 0.5em;
  width: 8em;
  color: #b9b9b9;
  border-radius: 5px;
  margin: 0em 0.5em 0.5em 0;
`;

const StyledThematicTagTemplate = styled(SpecializationTagNameTemplate)`
  display: flex;
  justify-content: center;
  background-color: #fbbb9a;
  color: #f49869;
  font-weight: 500;
`;

const StyledThematicTagText = styled.p`
  font-weight: 600;
`;

const ThematicTagTemplate = ({ label }) => {
  return (
    <StyledThematicTagTemplate>
      <StyledThematicTagText>{label}</StyledThematicTagText>
    </StyledThematicTagTemplate>
  );
};

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
      console.log("Searching");
    } else {
      setProjectsState(initialState);
    }
  };

  const ProjectTemplate = ({
    projectTitle,
    projectDescription,
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
        <SearchInput onChange={handleChange} ref={searchInputRef} />
        <SubmitSearchButton>Szukaj</SubmitSearchButton>
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
