import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import styled from "styled-components";
import AuthDesktopTemplate, {
  AuthDesktopMain,
} from "../components/templates/AuthDesktopTemplate";
// import { AuthDesktopMain } from "./AuthDesktopTemplate";
import * as firebase from "firebase/app";
import "firebase/firestore";

const ProjectTitle = styled.h1`
  color: var(--dark-clr);
  font-size: 2rem;
  margin: 1em 0;
`;

const NotificationTale = styled.article`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
  padding: 4em;
  width: 50vw;
  height: 20vh;
  background: var(--light-clr);
  border-radius: 4px;
`;

const NotificationAction = styled.h4`
  color: var(--dark-clr);
  font-size: 1.4rem;
`;

const NotificationUserMessage = styled.p`
  color: var(--dark-clr);
  font-size: 1.2rem;
  font-weight: 500;
`;
const NotificationComponent = ({ userNotifications }) => {
  const NotificationComponentArray = userNotifications.map((notification) => {
    return (
      <>
        <NotificationTale>
          <NotificationAction>{notification.text}</NotificationAction>
          <NotificationUserMessage>
            {notification.userMessage}
          </NotificationUserMessage>
        </NotificationTale>
      </>
    );
  });
  return NotificationComponentArray;
};

const Notifications = () => {
  const [userNotifications, setUserNotifications] = useState();
  const { currentUser } = useAuth();

  useEffect(() => {
    firebase
      .firestore()
      .collection(`userNotifications${currentUser.uid}`)
      .get()
      .then((snapshot) => {
        if (snapshot) {
          const firebaseUserNotifications = snapshot.docs.map((doc) => {
            return doc.data();
          });
          setUserNotifications(firebaseUserNotifications);
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
            <ProjectTitle>Twoje powiadomienia</ProjectTitle>
            {userNotifications && (
              <NotificationComponent userNotifications={userNotifications} />
            )}{" "}
          </>
        }
      />
    </AuthDesktopTemplate>
  );
};

export default Notifications;
