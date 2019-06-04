import React from "react";
import Notification from "./Notification";
import ProjectList from "../home/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const Dashboard = props => {
  //console.log(props);
  const { projects } = props;
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notification />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  //console.log(state);
  return {
    projects: state.firestore.ordered.projects
  };
};

export default compose(
  connect(
    mapStateToProps,
    {}
  ),
  firestoreConnect([{ collection: "projects" }])
)(Dashboard);
