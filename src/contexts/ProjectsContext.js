import React, { useContext, useState, useEffect } from "react";

const ProjectContext = React.createContext();

export const useProject = () => {
  return useContext(ProjectContext);
};

export const ProjectsProvider = ({ children }) => {
  const [project, setProject] = useState([{}]);

  const value = {
    project,
    setProject,
  };
  return (
    <>
      <ProjectContext.Provider value={value}>
        {children}
      </ProjectContext.Provider>
    </>
  );
};
