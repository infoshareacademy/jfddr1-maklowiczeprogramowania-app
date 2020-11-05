import * as firebase from "firebase/app";
import "firebase/firestore";
export const firebaseUsersDB = firebase.firestore().collection("users");
