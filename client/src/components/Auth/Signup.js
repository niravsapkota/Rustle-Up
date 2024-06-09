import React, { useState, useEffect } from "react";
import FormField from "./Formfield";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  //Check if already logged in
  const callProfile = async () => {
    const res = await axios.get("/profile", {
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
      },
    });
    if (res) {
      navigate("/profile");
    }
  };

  useEffect(() => {
    callProfile();
  }, []);

  // initial blank state of form
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    url: "",
  });

  const [image, setImage] = useState("");

  // function to dynamically update fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // signup function for button
  const btnSignup = async (e) => {
    console.log(user);
    e.preventDefault();
    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "rustleup");
      const dataRes = await axios.post(
        "https://api.cloudinary.com/v1_1/nrvserver/image/upload",
        formData
      );
      const imageUrl = dataRes.data.url;
      user.url = imageUrl;
    }
    const { name, email, password, confirmPassword, url } = user;
    if (name && email && password && image && password === confirmPassword) {
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
          id="app__name-input"
          name="name"
          fieldtype={Text}
          onChange={handleChange}
        />
        <FormField
          labeltitle="Email Address"
          id="app__name-input"
          name="email"
          fieldtype="email"
          onChange={handleChange}
        />
        <FormField
          labeltitle="Password"
          id="app__name-input"
          name="password"
          fieldtype="password"
          onChange={handleChange}
        />
        <FormField
          labeltitle="Confirm Password"
          id="app__name-input"
          name="confirmPassword"
          fieldtype="password"
          onChange={handleChange}
        />
        <FormField
          labeltitle="Profile Image"
          id="app-name-file"
          name="image"
          fieldtype="file"
          accept="image/"
          onChange={handleFileChange}
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
