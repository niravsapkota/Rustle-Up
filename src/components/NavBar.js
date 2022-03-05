import React from "react";
import Logo from "./Logo";
import menu from "./menu.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="app_header">
      <Logo />
      <nav>
        <ul className="app__nav-items">
          <li className="nav__item-home">
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/"
            >
              Home
            </Link>
          </li>

          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            className="app__nav-items"
            to="/"
          >
            <li>Trending</li>
          </Link>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/search"
          >
            <li>Search</li>
          </Link>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/miscellaneous"
          >
            <li>Miscellaneous</li>
          </Link>
        </ul>
      </nav>
      <span className="app__navbar-login">
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to="/signup"
        >
          Login / Sign Up
        </Link>
      </span>
      <img className="app__menu-icon" src={menu} />
    </header>
  );
}
