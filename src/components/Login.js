import React from "react";
import Formfield from "./Formfield";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <form className="app__signup-box">
        <h1 className="app__sign-up">Login</h1>
        <Formfield labeltitle="Email Address" fieldtype="email" />
        <Formfield labeltitle="Password" fieldtype="password" />
        <p className="app__login-link">
          Don't have an account?{" "}
          <Link
            style={{ color: "#7e7a05", textDecoration: "inherit" }}
            to="/signup"
          >
            Sign up Here
          </Link>
        </p>
        <button className="app__signup-btn">Login</button>
      </form>
    </>
  );
}
