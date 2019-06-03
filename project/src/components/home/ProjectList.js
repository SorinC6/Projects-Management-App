import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(pr => {
          return <ProjectSummary key={pr.id} project={pr} />;
        })}
    </div>
  );
};

export default ProjectList;
