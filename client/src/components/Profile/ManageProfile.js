import React, { useState } from "react";
import Formfield from "../Auth/Formfield";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ManageProfile() {
  const navigate = useNavigate();
  const [pass, setPass] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPass({
      ...pass,
      [name]: value,
    });
  };

  const btnChange = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = pass;
    if (password && password === confirmPassword) {
      axios
        .post("/auth/change-password", pass)
        .then((res) => {
          window.alert("Password change successful!");
          navigate("/profile");
        })
        .catch((error) => {
          window.alert("Something went wrong");
        });
    } else {
      alert("Passwords do not match.");
    }
  };

  const btnDelete = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure?") === true) {
      axios
        .get("auth/delete-profile", {
          headers: {
            "Access-Control-Allow-Credentials": true,
          },
        })
        .then((res) => {
          navigate("/");
        })
        .catch((error) => {
          window.alert("Unsuccessfull");
        });
    }
  };

  return (
    <div>
      <h1 className="app__manage-profile">Manage Profile</h1>
      <form className="app__signup-box">
        <h1 className="app__change-password">Change Password</h1>
        <Formfield
          labeltitle="Password"
          name="password"
          fieldtype="password"
          onChange={handleChange}
        />
        <Formfield
          labeltitle="Confirm Password"
          name="confirmPassword"
          fieldtype="password"
          onChange={handleChange}
        />
        <button className="app__signup-btn" type="submit" onClick={btnChange}>
          Change Password
        </button>
      </form>
      <div className="app__delete-profile">
        <p>
          Delete Account
          <btn className="app__delete-btn" type="submit" onClick={btnDelete}>
            Delete
          </btn>
        </p>
      </div>
    </div>
  );
}
