import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase/app";
import { auth } from "../firebase";
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [currentUserData, setCurrentUserData] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const getUserData = (userId) => {
    firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .get()
      .then((data) => {
        const userData = data.data();
        setCurrentUserData(userData);
      });
  };

  const signIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const cleanup = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return cleanup;
  }, []);

  const signOut = () => {
    return auth.signOut();
  };

  const value = {
    currentUser,
    currentUserData,
    signUp,
    signIn,
    signOut,
    getUserData,
  };

  return (
    <>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    </>
  );
};
