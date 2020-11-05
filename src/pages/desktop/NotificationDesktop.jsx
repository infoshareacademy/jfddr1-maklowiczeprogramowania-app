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
  background-color: var(--light-clr);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const NotificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;
  margin-top: 50px;
`;

const NotificationImg = styled.img`
  height: 8rem;
  width: 8rem;
  background-color: var(--dark-clr);
  border-radius: 4rem;
  margin: 1.2rem;
  padding: 1rem;
`;

const SmallButton = styled.button`
  padding: 0.6rem;
  font-family: "Quicksand";
  font-weight: 500;
  background-color: var(--dark-clr);
  color: var(--light-clr);
  border-radius: 0.3rem;
  border: none;
  cursor: pointer;
  outline: none;
  width: 20%;
  height: 40px;
`;

const NotiHeaderAndButtonContainer = styled.div``;

const NotiHeaderContainer = styled.header`
  font-weight: 800;
  font-size: 2rem;
  margin-bottom: 50px;
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
                <SmallButton>Zobacz profil</SmallButton>
                <SmallButton>Zobacz aplikacje</SmallButton>
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
                <SmallButton>Zobacz profil</SmallButton>
                <SmallButton>Zobacz aplikacje</SmallButton>
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
