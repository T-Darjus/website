import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <NavLink className={"nav-link"} to="/">
              Home
            </NavLink>
          </li>
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
        <div className="mob-links">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: "none" }, mr: 2 }}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            id="basic-button"
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link className="mob-link" to="/">
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link className="mob-link" to="/gallery">
                Gallery
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link className="mob-link" to="/aboutus">
                About Us
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link className="mob-link" to="/contact">
                Contact
              </Link>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
