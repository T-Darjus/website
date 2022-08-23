import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="navigation__container main-container">
        <div className="logo">
          <Link to="/">
            <img src="img/logo.png" alt="logo" />
          </Link>
        </div>
        <ul className="navigation__list">
          <li className="navigation__link">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active" : "nav-link"
              }
              to="/gallery"
            >
              Gallery
            </NavLink>
          </li>
          <li className="navigation__link">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active" : "nav-link"
              }
              to="/aboutus"
            >
              About us
            </NavLink>
          </li>
          <li className="navigation__link">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-active" : "nav-link"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
