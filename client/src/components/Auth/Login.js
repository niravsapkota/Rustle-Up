import React, { useState } from "react";
import FormField from "./Formfield";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  // Initial blank state of form
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // function to dynamically update fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const btnLogin = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (email && password) {
      axios
        .post("/auth/login", user)
        .then((res) => {
          //localStorage.setItem("user", JSON.stringify(res));
          navigate("/profile");
        })
        .catch((error) => {
          window.alert("Invalid Credentials");
        });
    } else {
      window.alert("Type all fields");
    }
  };

  return (
    <>
      <form className="app__signup-box">
        <h1 className="app__sign-up">Login</h1>
        <FormField
          labeltitle="Email Address"
          name="email"
          fieldtype="email"
          onChange={handleChange}
        />
        <FormField
          labeltitle="Password"
          name="password"
          fieldtype="password"
          onChange={handleChange}
        />
        <p className="app__login-link">
          Don't have an account?{" "}
          <Link
            style={{ color: "#7e7a05", textDecoration: "inherit" }}
            to="/signup"
          >
            Sign up Here
          </Link>
        </p>
        <button className="app__signup-btn" type="submit" onClick={btnLogin}>
          Login
        </button>
      </form>
    </>
  );
}
