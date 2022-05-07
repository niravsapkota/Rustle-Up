import React, { useState, useEffect } from "react";
import {
  MyHiMenu,
  MyHiXCircle,
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavElements";
import Logo from "./Logo";
import axios from "axios";

export default function NavBar() {
  const [open, setOpen] = useState(false);
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
          <NavLink to="/tips" activeStyle>
            Tips
          </NavLink>
        </NavMenu>
        <NavBtn>
          {logged ? (
            <NavBtnLink to="/profile">{info.name}</NavBtnLink>
          ) : (<>
            <NavBtnLink to="/login">Log In </NavBtnLink>/
            <NavBtnLink to="/signup"> Sign Up</NavBtnLink>
            </>
          )}
        </NavBtn>
        <MyHiMenu
          size={30}
          open={open}
          onClick={() => setOpen(!open)}
          className="app__hi-menu"
          style={{ position: "absolute", right: "5vw", top: "4vh" }}
        />
        <MyHiXCircle
          size={30}
          open={open}
          onClick={() => setOpen(!open)}
          className="app__hiX-circle"
          style={{ position: "absolute", right: "5vw", top: "4vh" }}
        />
      </Nav>
    </>
  );
}
