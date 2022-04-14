import React, { useState } from "react";
import Formfield from "../Auth/Formfield";

export default function ManageProfile() {
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassword({
      ...password,
      [name]: value,
    });
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
        <button className="app__signup-btn" type="submit">
          Change Password
        </button>
      </form>
      <div className="app__delete-profile">
        <p>
          Delete Account
          <btn className="app__delete-btn" type="submit">
            Delete
          </btn>
        </p>
      </div>
    </div>
  );
}
