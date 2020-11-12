import search from "../img/search-icon-light.svg";
import profile from "../img/profile-icon.svg";
import notifications from "../img/bell-icon-light.svg";
import messages from "../img/message-bar-icon-light.svg";
import friends from "../img/friends-icon.svg";
import projects from "../img/projects-icon.svg";
import signOut from "../img/sign-out-icon.svg";

export const authMenuDB = [
  {
    label: "Wyszukiwarka",
    icon: search,
    path: "/pages/AuthWelcomeView",
  },

  {
    label: "Profil",
    icon: profile,
    path: "/pages/OwnProfileView",
  },
  {
    label: "Powiadomienia",
    icon: notifications,
    path: "/pages/NotificationsView",
  },
  {
    label: "Wiadomości",
    icon: messages,
    path: "/pages/MessagesView",
  },
  {
    label: "Znajomi",
    icon: friends,
    path: "/pages/FriendsView",
  },
  {
    label: "Projekty",
    icon: projects,
    path: "/pages/ProjectsView",
  },
  {
    value: "signOut",
    label: "Wyloguj się",
    icon: signOut,
    path: "/pages/WelcomePage",
  },
];
