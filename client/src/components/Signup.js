import React from "react";
import Formfield from "./Formfield";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <form className="app__signup-box">
        <h1 className="app__sign-up">Sign Up</h1>
        <Formfield labeltitle="Name" fieldtype={Text} />
        <Formfield labeltitle="Email Address" fieldtype="email" />
        <Formfield labeltitle="Password" fieldtype="password" />
        <Formfield labeltitle="Confirm Password" fieldtype="password" />
        <p className="app__login-link">
          Already have an account?{" "}
          <Link
            style={{ color: "#7e7a05", textDecoration: "inherit" }}
            to="/login"
          >
            Login Here
          </Link>
        </p>
        <button className="app__signup-btn">Sign Up</button>
      </form>
    </>
  );
}
