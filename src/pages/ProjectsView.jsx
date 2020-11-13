import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthDesktopTemplate, {
  AuthDesktopMain,
} from "../components/templates/AuthDesktopTemplate";
import { useAuth } from "../contexts/AuthContext";
import * as firebase from "firebase/app";
import "firebase/firestore";
import {
  StyledThematicTagTemplate,
  StyledThematicTagText,
} from "../components/tags/ThematicTag";
import {
  ProjectText,
  SearchedProject,
  ProjectTitle,
  ProjectImage,
  TitleImage,
  ProjectDescription,
  ProjectImageContainer,
  EvenSmallerButton,
  ProjectTagsContainer,
} from "./SearchProjects";

const PageHeading = styled.h1`
  color: var(--dark-clr);
  font-size: 2rem;
  margin: 2em 0;
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
