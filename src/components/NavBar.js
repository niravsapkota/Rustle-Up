import React, { useState,useRef } from "react";
import Logo from "./Logo";
import menu from "../assets/menu.svg";
import cancel from "../assets/cancel.svg";
import { Link } from "react-router-dom";

export default function NavBar() {

/*  const oldStyle = ()=>{
    return( 
    { 
    nav:{
      transform: 'translateX(100%)'
    },
    btn:{
      display: 'unset',
      background: 'none',
      border: 'none', 
      padding: '0', 
      cursor: 'pointer'
    },
    pic:menu
    })
  };*/

/*    nav:{
      transform: 'translateX(100%)'
    },
    btn:{
      display: 'unset',
      background: 'none',
      border: 'none', 
      padding: '0', 
      cursor: 'pointer'
    },
    pic:menu
    });

  const oldStyle = usePrevious(newStyle);
  
  function handleClick() {

    setStyle(()=>{
      return({

        nav:{
          transform:'translateX(0%)'
        },
        btn:{
          display:'unset',
          backgroundSize: 'contain',
          border: 'none', 
          padding: '0', 
          cursor: 'pointer',
          position:'absolute',
          zIndex:2,
          right:0,
        },
        pic:cancel
      })
    }
    );

  }*/

  
  return (
    <header className="app_header">
      <Logo />
      <nav>
        <ul className="app__nav-items" >
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
            to="/trending"
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
      <button className="app__menu-btn">
        <img className="app__menu-icon"/>
      </button>
    </header>
  );
}
