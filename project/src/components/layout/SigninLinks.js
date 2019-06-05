import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SigninLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a href="#s" onClick={props.signOut}>
          Log Out
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          NN
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = {
  signOut
};

export default connect(
  null,
  mapDispatchToProps
)(SigninLinks);
