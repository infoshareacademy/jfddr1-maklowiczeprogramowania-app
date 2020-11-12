import React, { useContext, useState, useEffect } from "react";
import { firebaseProjectsDB } from "../firebase/ProjectsDB";
const ProjectContext = React.createContext();

export const useProject = () => {
  return useContext(ProjectContext);
};

export const ProjectsProvider = ({ children }) => {
  const [project, setProject] = useState([{}]);
  const [initialState, setInitialState] = useState();
  const [projectsState, setProjectsState] = useState();

  useEffect(() => {
    firebaseProjectsDB
      .get()
      .then((snapshot) => {
        if (snapshot) {
          const firebaseProjects = snapshot.docs.map((doc) => {
            return doc.data();
          });
          setProjectsState(firebaseProjects);
          setInitialState(firebaseProjects);
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  const value = {
    project,
    setProject,
    setProjectsState,
    projectsState,
    initialState,
  };
  return (
    <>
      <ProjectContext.Provider value={value}>
        {children}
      </ProjectContext.Provider>
    </>
  );
};
