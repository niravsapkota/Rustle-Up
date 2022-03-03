import React from "react";
import Logo from "./Logo";
import menu from "./menu.svg";

export default function Header() {
  return (
    <header className="app_header">
      <Logo />
      <nav>
        <ul className="app__nav-items">
          <li className="nav__item-home">Home</li>
          <li>Trending</li>
          <li>Search</li>
          <li>Miscellaneous</li>
        </ul>
      </nav>
      <a href="#" className="app__navbar-login">
        Login / Sign Up
      </a>
      <img className="app__menu-icon" src={menu} />
    </header>
  );
}
