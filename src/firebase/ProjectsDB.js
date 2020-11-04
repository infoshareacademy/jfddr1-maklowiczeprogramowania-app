import * as firebase from "firebase/app";
import "firebase/firestore";
export const firebaseProjectsDB = firebase.firestore().collection("projects");
