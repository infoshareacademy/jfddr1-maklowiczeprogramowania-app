import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StyledButton } from "../components/buttons/Button";
import CloseIconSrc from "../img/exit-light-icon.svg";
import { useAuth } from "../contexts/AuthContext";

import * as firebase from "firebase/app";
import "firebase/firestore";

const ApplicationModalButton = styled(StyledButton)`
  color: var(--dark-clr);
  background: var(--light-clr);
  margin: 1em 0;
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ModalHeading = styled.h2`
  margin-bottom: 0.5em;
  font-size: 1.8rem;
  color: var(--text-clr);
`;

const StyledCreateContactModal = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40vw;
  height: 60vh;
  padding: 4em 0;
  background: #343448;
  border-radius: 4px;
`;

const ModalTextArea = styled.textarea`
   width: 24em;
  height: 10em;
  margin .5em 0em;
  padding: 1em 1em;
  outline: none;
  font-family: 'Quicksand', sans-serif;
  font-size: 1em;
  font-weight: 500;
  background-color: #2b2b3f;
  color: #fbfbfb;
  border-radius: 5px;
  border: none;
`;

const CloseIcon = styled.img`
  position: absolute;
  right: 2em;
  top: 2em;
  cursor: pointer;
`;

const ErrorMessageBackground = styled.div`
  border-radius: 0.25rem;
  margin-bottom: 0.5em;
  color: var(--acc-clr);
`;

const ErrorMessageParagraph = styled.p`
  font-size: 1.1rem;
`;

const ProjectTitle = styled.p`
  font-weight: 700;
  color: #fbbb9a;
`;

const ApplicationText = styled.p`
  padding: 0 2em;
  margin: 0.5em auto;
`;

const ApplicationModal = ({ showModal, setShowModal, clickedProject }) => {
  const [error, setError] = useState();
  const { currentUser, currentUserData } = useAuth();
  const applicationTextRef = React.createRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const notification = {
      user: `${currentUserData.firstName} ${currentUserData.secondName}`,
      action: "projectApplication",
      userMessage: applicationTextRef.current.value,
      text: `${currentUserData.firstName} ${currentUserData.secondName} zaaplikował do Twojego projektu ${clickedProject.title} `,
    };
    setShowModal((prevState) => !prevState);

    firebase
      .firestore()
      .collection(`userNotifications${clickedProject.author.userFirebaseId}`)
      .add(notification);
  };
  const handleClick = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      {showModal && (
        <StyledCreateContactModal>
          <CloseIcon onClick={handleClick} src={CloseIconSrc} />
          <ModalHeading>
            Aplikujesz do projektu{" "}
            <ProjectTitle>{clickedProject.title}</ProjectTitle>
          </ModalHeading>
          <ApplicationText>
            Napisz proszę poniżej dlaczego chciałbyś pracować w tym projekcie,
            opisz się w kilku zdaniach, to zwiększy szansę na pozytywne
            rozpatrzenie Twojej aplikacji!
          </ApplicationText>
          <ModalForm onSubmit={handleSubmit}>
            {error && (
              <ErrorMessageBackground>
                <ErrorMessageParagraph>
                  Hej, napisz coś! To naprawdę Ci pomoże!
                </ErrorMessageParagraph>
              </ErrorMessageBackground>
            )}
            <ModalTextArea
              type="text"
              name={"note"}
              ref={applicationTextRef}
              required
            ></ModalTextArea>
            <ApplicationModalButton type="submit">
              Aplikuj
            </ApplicationModalButton>
          </ModalForm>
        </StyledCreateContactModal>
      )}
    </>
  );
};

export default ApplicationModal;
