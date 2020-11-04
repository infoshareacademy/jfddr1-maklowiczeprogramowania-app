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
    path: "",
  },
  {
    label: "Powiadomienia",
    icon: notifications,
    path: "",
  },
  {
    label: "Wiadomości",
    icon: messages,
    path: "",
  },
  {
    label: "Znajomi",
    icon: friends,
    path: "",
  },
  {
    label: "Projekty",
    icon: projects,
    path: "",
  },
  {
    label: "Wyloguj się",
    icon: signOut,
    path: "/pages/WelcomePages",
  },
];
