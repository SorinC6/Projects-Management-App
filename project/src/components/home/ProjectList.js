import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(pr => {
          return (
            <Link key={pr.id} to={`/project/${pr.id}`}>
              <ProjectSummary project={pr} />;
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
