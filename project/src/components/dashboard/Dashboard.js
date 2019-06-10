import React from "react";
import Notification from "./Notification";
import ProjectList from "../home/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

const Dashboard = props => {
  const { projects, auth, notification } = props;

  console.log(notification);
  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notification notification={notification} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  //console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notification: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(
    mapStateToProps,
    {}
  ),
  firestoreConnect([
    { collection: "projects" },
    { collection: "notifications", limit: 3 }
  ])
)(Dashboard);
