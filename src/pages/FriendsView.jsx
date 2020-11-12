import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import AuthDesktopTemplate, {
  AuthDesktopMain,
} from "../components/templates/AuthDesktopTemplate";
// import { AuthDesktopMain } from "./AuthDesktopTemplate";
import { useProject } from "../contexts/ProjectsContext";
import { StyledButton } from "../components/buttons/Button";
import ApplicationModal from "../components/ApplicationModal";

const FriendsView = () => {
  const history = useHistory();
  const { projectId } = useParams();
  const { projectsState } = useProject();
  const [showModal, setShowModal] = useState(false);

  const ProjectTitle = styled.h1`
    color: var(--dark-clr);
    font-size: 2rem;
  `;

  return (
    <AuthDesktopTemplate>
      <AuthDesktopMain
        children={
          <>
            <ProjectTitle>Sekcja listy znajomych użytkownika</ProjectTitle>
          </>
        }
      />
    </AuthDesktopTemplate>
  );
};

export default FriendsView;
