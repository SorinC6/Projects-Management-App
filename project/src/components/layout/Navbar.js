import React from "react";
import { Link } from "react-router-dom";
import SigninLinks from "./SigninLinks";
import SignoutLinks from "./SignoutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth } = props;
  console.log("auth ", auth);
  const links = auth.uid ? <SigninLinks /> : <SignoutLinks />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        {links}
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);
