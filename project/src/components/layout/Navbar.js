import React from "react";
import { Link } from "react-router-dom";
import SigninLinks from "./SigninLinks";
import SignoutLinks from "./SignoutLinks";

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

export default Navbar;
