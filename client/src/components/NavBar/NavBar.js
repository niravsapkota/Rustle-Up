import React , { useState, useEffect } from "react";
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
    try{
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
      }
    } catch (error) {
      if(error.response && error.response.status === 401)
      {
          setLogged(false);
        console.error("Unauthorized - possibly invalid token");
        // Optionally redirect to login or handle token refresh
      } else {
        console.error("An error occurred:", error);
      }
    }
  };

  useEffect(() => {
    callProfile(); // Call the profile once when the component mounts
    const interval = setInterval(callProfile, 1000); // Optionally check every 1000 ms

    return () => clearInterval(interval); // Clear interval on component unmount
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
          ) : (
            <>
              <NavBtnLink to="/login">Log In /</NavBtnLink>
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
