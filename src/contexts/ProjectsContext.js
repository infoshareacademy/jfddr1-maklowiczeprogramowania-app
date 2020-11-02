import React, { useContext, useState, useEffect } from "react";

const ProjectContext = React.createContext();

export const useProject = () => {
  return useContext(ProjectContext);
};

export const ProjectsProvider = ({ children }) => {
  const [project, setProject] = useState([{}]);
  const manageProject = (projectParams) => {
    setProject((oldProject) => ({ ...oldProject, projectParams }));
  };

  console.log(project);
  const value = {
    project,
    setProject,
    manageProject,
  };
  const [loading, setLoading] = useState(true);
  return (
    <>
      <ProjectContext.Provider value={value}>
        {children}
      </ProjectContext.Provider>
    </>
  );
};
