import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { firebaseUsersDB } from "../firebase/UsersDB";

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [currentUserData, setCurrentUserData] = useState();
  const [profileImage, setProfileImage] = useState();
  const [loading, setLoading] = useState(true);
  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const getUserData = (userId) => {
    firebaseUsersDB
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

      if (currentUser) {
        getUserData(user.uid);
      }
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
    setCurrentUserData,
    setProfileImage,
  };

  return (
    <>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    </>
  );
};
