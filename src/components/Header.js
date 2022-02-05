import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src="./popcorn_Time_logo.png" alt="logo du site" className="logo" width="50px" height="50px" />
      <NavLink to="/">
        <h1>AlloMovies</h1>
      </NavLink>
      <nav>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/favories" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Favoris</li>
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
