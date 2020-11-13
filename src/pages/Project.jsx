import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import AuthDesktopTemplate, {
  AuthDesktopMain,
} from "../components/templates/AuthDesktopTemplate";
import { useProject } from "../contexts/ProjectsContext";
import { StyledButton } from "../components/buttons/Button";
import ApplicationModal from "../components/ApplicationModal";
import ProfileImageIconSrc from "../img/example-profile-image.svg";
import {
  StyledThematicTagTemplate,
  StyledThematicTagText,
} from "../components/tags/ThematicTag";
import { StyledAddButton } from "../components/SignInUpElements";

const ProjectTitle = styled.h1`
  color: var(--dark-clr);
  font-size: 2rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  padding: 1em 2em;
  color: var(--dark-clr);
`;

const TeamMemberDescription = styled.p`
  font-size: 1.1rem;
  line-height: 25px;
  font-weight: 400;
`;

const TeamContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 1em 0 4rem 0;
  flex-wrap: nowrap;
  gap: 30px;
`;

const UserImage = styled.div`
  height: 8rem;
  width: 8rem;
  background-color: var(--light-clr);
  border-radius: 4rem;
  margin: 0 1.5rem 0.7rem 1.5rem;
  padding: 1rem;
`;

const TechContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const ToolsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const SmallerHeading = styled.h2`
  color: var(--dark-clr);
`;
const MemberName = styled.h3`
  color: #efefef;
`;
const TeamMemberTemplate = styled.div`
  position: relative;
  width: 20vw;
  padding: 2em;
  min-height: 55vh;
  border-radius: 5px;
  color: #bcbcbc;
  background: var(--dark-clr);
`;

const LightClrButton = styled(StyledButton)`
  position: absolute;
  background-color: var(--light-clr);
  color: var(--dark-clr);
  font-size: 1rem;
  font-weight: 600;
  margin: 0 auto;
  bottom: -1.2em;
  left: 50%;
  transform: translateX(-50%);
`;

const TechLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3em 0.7em;
  margin: 0.2em;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 4px;
  background-color: var(--light-clr);
  color: var(--dark-clr);
`;

const MinorHeading = styled.h4`
  margin: 0.8em 0;
`;

const QuestionMark = styled.p`
  font-size: 4rem;
  font-weight: 600;
  color: var(--dark-clr);
`;

const ButtonContainer = styled.div``;

const ThematicTagContainer = styled.div`
  display: flex;
  margin: 1rem;
`;

const ThematicTagTemplate = ({ clickedProject }) => {
  const ThematicTagsComponents = clickedProject.tags.map((label) => {
    return (
      <StyledThematicTagTemplate>
        <StyledThematicTagText>{label}</StyledThematicTagText>
      </StyledThematicTagTemplate>
    );
  });

  return ThematicTagsComponents;
};

const ProjectAuthor = ({ clickedProject }) => {
  const TechTagsComponents = clickedProject.author.tech.map((tag) => {
    return (
      <>
        <TechLabel>{tag}</TechLabel>
      </>
    );
  });
  const ToolTagsComponents = clickedProject.author.tools.map((tag) => {
    return (
      <>
        <TechLabel>{tag}</TechLabel>
      </>
    );
  });
  return (
    <>
      <TeamMemberTemplate>
        <UserImage />
        <MemberName>
          {clickedProject.author.firstName + clickedProject.author.secondName}
        </MemberName>
        <MinorHeading>{clickedProject.author.specialization}</MinorHeading>

        <TeamMemberDescription>
          Quisque a posuere ligula. Nullam efficitur, neque nec elementum
          tincidunt.
        </TeamMemberDescription>
        <MinorHeading>Technologie</MinorHeading>
        <TechContainer>{TechTagsComponents}</TechContainer>

        <MinorHeading>Narzędzia</MinorHeading>
        <ToolsContainer>{ToolTagsComponents}</ToolsContainer>
        <LightClrButton>Zobacz profil</LightClrButton>
      </TeamMemberTemplate>
    </>
  );
};

const TeamMembers = ({ setShowModal, clickedProject }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setShowModal((prevState) => !prevState);
  };
  const MemberComponents = clickedProject?.team.map((member) => {
    const TechTagsComponents = member.tech.map((tag) => {
      return (
        <>
          <TechLabel>{tag}</TechLabel>
        </>
      );
    });
    const ToolTagsComponents = member.tools.map((tag) => {
      return (
        <>
          <TechLabel>{tag}</TechLabel>
        </>
      );
    });
    return (
      <>
        <TeamMemberTemplate>
          <UserImage>
            <QuestionMark>?</QuestionMark>
          </UserImage>
          <MemberName>{member.name}</MemberName>
          <TeamMemberDescription>
            Quisque a posuere ligula. Nullam efficitur, neque nec elementum
            tincidunt.
          </TeamMemberDescription>
          <MinorHeading>Wymagane technologie</MinorHeading>
          <TechContainer>{TechTagsComponents}</TechContainer>

          <MinorHeading>Wymagane narzędzia</MinorHeading>
          <ToolsContainer>{ToolTagsComponents}</ToolsContainer>
          <LightClrButton onClick={handleClick}>Zaaplikuj</LightClrButton>
        </TeamMemberTemplate>
      </>
    );
  });

  return MemberComponents;
};

const Project = () => {
  const history = useHistory();
  const { projectId } = useParams();
  const { projectsState } = useProject();
  const [showModal, setShowModal] = useState(false);

  const clickedProject = projectsState.find(
    (project) => project.id === parseInt(projectId, 10)
  );

  const handleClick = (e) => {
    e.preventDefault();
    history.push("/pages/AuthWelcomeView");
  };

  return (
    <>
      {showModal && (
        <ApplicationModal
          showModal={showModal}
          setShowModal={setShowModal}
          clickedProject={clickedProject}
        ></ApplicationModal>
      )}
      <AuthDesktopTemplate>
        <AuthDesktopMain
          children={
            <>
              <ProjectTitle>{clickedProject?.title}</ProjectTitle>
              <ProjectDescription>
                {clickedProject?.description}
              </ProjectDescription>
              <ApplicationModal></ApplicationModal>
              <SmallerHeading>Drużyna</SmallerHeading>
              <TeamContainer>
                <ApplicationModal></ApplicationModal>
                <ProjectAuthor clickedProject={clickedProject} />
                <TeamMembers
                  setShowModal={setShowModal}
                  clickedProject={clickedProject}
                ></TeamMembers>
              </TeamContainer>

              <SmallerHeading>Tematyka</SmallerHeading>
              <ThematicTagContainer>
                <ThematicTagTemplate
                  clickedProject={clickedProject}
                ></ThematicTagTemplate>
              </ThematicTagContainer>
              <ButtonContainer>
                {" "}
                <StyledAddButton onClick={handleClick}>Wróć</StyledAddButton>
              </ButtonContainer>
            </>
          }
        />
      </AuthDesktopTemplate>
    </>
  );
};

export default Project;
