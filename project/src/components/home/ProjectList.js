import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(pr => {
          return (
            <Link to={`/project/${pr.id}`}>
              <ProjectSummary key={pr.id} project={pr} />;
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
