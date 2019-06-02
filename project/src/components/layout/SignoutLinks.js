import React from "react";
import { NavLink } from "react-router-dom";

const SignoutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/">Login</NavLink>
      </li>
    </ul>
  );
};

export default SignoutLinks;
