import React, { useState, useEffect } from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavElements";
import Logo from "./Logo";
import axios from "axios";

export default function NavBar(props) {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/trending" activeStyle>
            Trending
          </NavLink>
          <NavLink to="/search" activeStyle>
            Search
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signup">Login / Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}
