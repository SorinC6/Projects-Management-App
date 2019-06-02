import React from "react";

const ProjectDetails = props => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div className=" container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id} </span>
          <p>
            lorem ipsus lorem ipsuslorem ipsuslorem ipsus lorem ipsus lorem
            ipsus lorem ipsus lorem ipsuslorem ipsus lorem ipsus lorem ipsus{" "}
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Chis Sorin</div>
          <div>1 July, 2 AM</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
