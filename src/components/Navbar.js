import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <Link to="/" className="navbar-brand ml-5">
        React redux contact app
      </Link>
    </nav>
  );
};

export default NavBar;
