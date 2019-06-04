import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectDetails = props => {
  const id = props.match.params.id;
  console.log(props.project);
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

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const currentProject = projects ? projects[id] : null;
  return {
    project: currentProject
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
