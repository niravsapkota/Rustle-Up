import React, { useState } from "react";
import { MyHiMenu, MyHiXCircle, Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavElements";
import Logo from "./Logo";


export default function NavBar() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <NavMenu open={open}>
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
        <MyHiMenu size={30} open={open} onClick={() => setOpen(!open)} className="app__hi-menu" style={{position:"absolute",right:'5vw',top:'4vh'}}/>
        <MyHiXCircle size={30} open={open} onClick={() => setOpen(!open)} className="app__hiX-circle" style={{position:"absolute",right:'5vw',top:'4vh'}}/>
      </Nav>
    </>
  );
}
