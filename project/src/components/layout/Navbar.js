import React from "react";
import { Link } from "react-router-dom";
import SigninLinks from "./SigninLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        <SigninLinks />
      </div>
    </nav>
  );
};

export default Navbar;
