import React, { useState, useEffect } from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavElements";
import Logo from "./Logo";
import axios from "axios";

export default function NavBar() {
  const [logged, setLogged] = useState(false);
  const [info, setInfo] = useState([]);

  const callProfile = async () => {
    const res = await axios.get("/profile", {
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
      },
    });
    if (res) {
      const value = res.data;
      setInfo(value);
      setLogged(true);
    } else {
      setLogged(false);
    }
  };

  useEffect(() => {
    setInterval(() => {
      callProfile();
    }, 1000);
  }, []);

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
          {logged ? (
            <NavBtnLink to="/profile">{info.name}</NavBtnLink>
          ) : (
            <NavBtnLink to="/signup">Login / Sign Up</NavBtnLink>
          )}
        </NavBtn>
      </Nav>
    </>
  );
}
