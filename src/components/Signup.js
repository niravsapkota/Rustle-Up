import React from "react";
import Formfield from "./Formfield";

export default function SignUp() {
  return (
    <>
      <form className="app__signup-box">
        <h1 className="app__sign-up">Sign Up</h1>
        <Formfield labeltitle="Name" fieldtype={Text} />
        <Formfield labeltitle="Email Address" fieldtype="email" />
        <Formfield labeltitle="Password" fieldtype="password" />
        <Formfield labeltitle="Re-type Password" fieldtype="password" />
        <p className="app__login-link">Already have an account? Login Here</p>
        <button className="app__signup-btn">Sign Up</button>
      </form>
    </>
  );
}
