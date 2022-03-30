import React from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavElements";
import Logo from "./Logo";

export default function NavBar() {
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
          <NavLink to="/miscellaneous" activeStyle>
            Miscellaneous
          </NavLink>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to="/signup">Login / Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}
