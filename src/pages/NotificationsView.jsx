import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import styled from "styled-components";
import AuthDesktopTemplate, {
  AuthDesktopMain,
} from "../components/templates/AuthDesktopTemplate";
import * as firebase from "firebase/app";
import "firebase/firestore";
import ProfileImageIconSrc from "../img/example-profile-image.svg";

const ProjectTitle = styled.h1`
  color: var(--dark-clr);
  font-size: 2rem;
  margin: 1em 0;
`;

const NotificationTale = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1em;
  margin: 1em 0;
  width: 50vw;
  min-height: 20vh;
  background: var(--light-clr);
  border-radius: 4px;
`;

const NotificationAction = styled.h4`
  color: var(--dark-clr);
  font-size: 1.4rem;
  text-align: left;
`;

const NotificationUserMessage = styled.p`
  color: var(--dark-clr);
  font-size: 1.2rem;
  font-weight: 500;
  text-align: left;
`;

const UserImage = styled.img`
  height: 8rem;
  width: 8rem;
  background-color: var(--dark-clr);
  border-radius: 4rem;
  margin: 0 1.5rem 0.7rem 1.5rem;
  padding: 1rem;
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`;

const TextWrapper = styled.section``;

const NotificationComponent = ({ userNotifications }) => {
  const NotificationComponentArray = userNotifications.map((notification) => {
    return (
      <>
        <NotificationTale>
          <Wrapper>
            <UserImage src={ProfileImageIconSrc} />
            <TextWrapper>
              <NotificationAction>{notification.text}</NotificationAction>
              <NotificationUserMessage>
                {notification.userMessage}
              </NotificationUserMessage>
            </TextWrapper>
          </Wrapper>
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
