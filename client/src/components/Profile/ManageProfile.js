import React, { useState } from "react";
import Formfield from "../Auth/Formfield";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ManageProfile() {
  const navigate = useNavigate();

  const [image, setImage] = useState("");

  const [pass, setPass] = useState({
    password: "",
    confirmPassword: "",
    url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPass({
      ...pass,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const btnChange = async (e) => {
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
      console.log(imageUrl);
      pass.url = imageUrl;
    }
    const { password, confirmPassword, url } = pass;
    if (password && image && password === confirmPassword) {
      axios
        .post("/auth/change-password", pass)
        .then((res) => {
          window.alert("Update successful!");
          navigate("/profile");
        })
        .catch((error) => {
          window.alert("Something went wrong");
        });
    } else {
      alert("Fill all details correctly");
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
        <h1 className="app__change-password">Update Info</h1>
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
        <Formfield
          labeltitle="Profile Image"
          name="image"
          fieldtype="file"
          accept="image/"
          onChange={handleFileChange}
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
