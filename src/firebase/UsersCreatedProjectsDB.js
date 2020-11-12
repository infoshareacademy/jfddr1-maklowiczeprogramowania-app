import * as firebase from "firebase/app";
import "firebase/firestore";
export const firebaseUsersCreatedProject = firebase
  .firestore()
  .collection("usersCreatedProjects");
