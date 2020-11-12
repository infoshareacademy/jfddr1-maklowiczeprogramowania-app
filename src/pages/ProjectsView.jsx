import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthDesktopTemplate, {
  AuthDesktopMain,
} from "../components/templates/AuthDesktopTemplate";
// import { AuthDesktopMain } from "./AuthDesktopTemplate";
import { useAuth } from "../contexts/AuthContext";
import { StyledSmallButton } from "../components/buttons/SmallButton";
import * as firebase from "firebase/app";
import "firebase/firestore";

const ProjectDescription = styled.p`
var(--dark-clr);
font-size:1rem;
padding:.5em 1em;
font-weight:500;
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

const SpecializationTagNameTemplate = styled.div`
  background-color: #e9e9e9;
  padding: 0.5em;
  width: 8em;
  color: #b9b9b9;
  border-radius: 5px;
  margin: 0em 0.5em 0.5em 0;
`;

const ProjectTitle = styled.h1`
  color: var(--dark-clr);
  font-size: 2rem;
  margin: 0 0.5em;
`;

const PageHeading = styled.h1`
  color: var(--dark-clr);
  font-size: 2rem;
  margin: 2em 0;
`;

const TitleImage = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
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

const ThematicTagTemplate = ({ label }) => {
  return (
    <StyledThematicTagTemplate>
      <StyledThematicTagText>{label}</StyledThematicTagText>
    </StyledThematicTagTemplate>
  );
};

const FirestoreProjects = ({ userProjects, setUserProjects }) => {
  const { currentUser } = useAuth();

  const searchedProjectsComponents = userProjects.map(
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

const ProjectsView = () => {
  const [userProjects, setUserProjects] = useState();
  const { currentUser } = useAuth();

  useEffect(() => {
    firebase
      .firestore()
      .collection(currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot) {
          const firebaseProjects = snapshot.docs.map((doc) => {
            return doc.data();
          });
          setUserProjects(firebaseProjects);
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  return (
    <AuthDesktopTemplate>
      <AuthDesktopMain
        children={
          <>
            <PageHeading>Stworzone przez Ciebie projekty</PageHeading>

            {userProjects && (
              <FirestoreProjects
                setUserProjects={setUserProjects}
                userProjects={userProjects}
              />
            )}
          </>
        }
      />
    </AuthDesktopTemplate>
  );
};

export default ProjectsView;
