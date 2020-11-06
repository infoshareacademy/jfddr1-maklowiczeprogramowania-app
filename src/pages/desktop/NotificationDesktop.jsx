import React, { useState } from "react";
import styled from "styled-components";
import AuthDesktopTemplate from "../AuthDesktopTemplate";
import ProfileImageIconSrc from "../../img/example-profile-image.svg";

const NotificationMainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 5em 5rem;
  font-weight: 600;
  color: var(--dark-clr);
`;

const NotificationHeader = styled.header`
  font-size: 2.6rem;
  color: var(--text-color);
  @media (min-width: 1024px) {
    color: var(--dark-clr);
  }
`;

const NotificationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background-color: var(--light-clr);
`;

const NotificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;
  margin-top: 50px;
`;

const NotificationImg = styled.img`
  height: 6rem;
  width: 6rem;
  background-color: var(--dark-clr);
  border-radius: 3rem;
  margin-right: 1.5rem;
  padding: 1rem;
`;

const NotiSmallButton = styled.button`
  padding: 0.6rem;
  font-family: "Quicksand";
  font-weight: 500;
  background-color: var(--dark-clr);
  color: var(--light-clr);
  border-radius: 0.3rem;
  border: none;
  cursor: pointer;
  outline: none;
  height: 40px;
`;

const NotiHeaderAndButtonContainer = styled.div``;

const NotiHeaderContainer = styled.header`
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const NotiButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const NotificationDesktop = () => {
  return (
    <AuthDesktopTemplate>
      <NotificationMainWrapper>
        <NotificationHeader>Powiadomienia</NotificationHeader>
        <NotificationsContainer>
          <NotificationWrapper>
            <NotificationImg src={ProfileImageIconSrc}></NotificationImg>
            <NotiHeaderAndButtonContainer>
              <NotiHeaderContainer>
                Wielki Krol Maklowicz chce dołączyć do Twojego projektu!
              </NotiHeaderContainer>
              <NotiButtonContainer>
                <NotiSmallButton>Zobacz profil</NotiSmallButton>
                <NotiSmallButton>Zobacz aplikacje</NotiSmallButton>
              </NotiButtonContainer>
            </NotiHeaderAndButtonContainer>
          </NotificationWrapper>
          <NotificationWrapper>
            <NotificationImg src={ProfileImageIconSrc}></NotificationImg>
            <NotiHeaderAndButtonContainer>
              <NotiHeaderContainer>
                Robercik Maklowicz Wysłał Ci zaproszenie do znajomych!
              </NotiHeaderContainer>
              <NotiButtonContainer>
                <NotiSmallButton>Zobacz profil</NotiSmallButton>
                <NotiSmallButton>Zobacz aplikacje</NotiSmallButton>
              </NotiButtonContainer>
            </NotiHeaderAndButtonContainer>
          </NotificationWrapper>
          <NotificationWrapper>
            <NotificationImg src={ProfileImageIconSrc}></NotificationImg>
            <NotiHeaderAndButtonContainer>
              <NotiHeaderContainer>
                Gratulacje!! Twoja strona do projektu zaakceptowana!
              </NotiHeaderContainer>
            </NotiHeaderAndButtonContainer>
          </NotificationWrapper>
        </NotificationsContainer>
      </NotificationMainWrapper>
    </AuthDesktopTemplate>
  );
};

export default NotificationDesktop;
