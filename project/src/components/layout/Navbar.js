import React from "react";
import { Link } from "react-router-dom";
import SigninLinks from "./SigninLinks";
import SignoutLinks from "./SignoutLinks";
import { connect } from "react-redux";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        <SigninLinks />
        <SignoutLinks />
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(Navbar);
