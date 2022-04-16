import React, { useState } from "react";
import FormField from "./Formfield";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  // initial blank state of form
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // function to dynamically update fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // signup function for button
  const btnSignup = async (e) => {
    console.log(user);
    e.preventDefault();
    const { name, email, password, confirmPassword } = user;
    if (name && email && password && password === confirmPassword) {
      axios
        .post("/auth/signup", user)
        .then((response) => {
          window.alert("Registration successful!");
          navigate("/login");
        })
        .catch((error) => {
          if (error.response.status === 400) {
            window.alert("Email already used");
          } else {
            window.alert("Something went wrong");
          }
        });
    } else {
      alert("Please type the fields correctly");
    }
  };

  return (
    <div>
      <form className="app__signup-box">
        <h1 className="app__sign-up">Sign Up</h1>
        <FormField
          labeltitle="Name"
          name="name"
          fieldtype={Text}
          onChange={handleChange}
        />
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
        <FormField
          labeltitle="Confirm Password"
          name="confirmPassword"
          fieldtype="password"
          onChange={handleChange}
        />
        <p className="app__login-link">
          Already have an account?{" "}
          <Link
            style={{ color: "#7e7a05", textDecoration: "inherit" }}
            to="/login"
          >
            Login Here
          </Link>
        </p>
        <button className="app__signup-btn" type="submit" onClick={btnSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
