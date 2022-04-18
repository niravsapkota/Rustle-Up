import React, { useState } from "react";
import Formfield from "./Auth/Formfield";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { prototype } from "events";

const createReview = () => {
  const navigate = useNavigate();

  // initial blank state of form
  const [reviewDetails, setReview] = useState({
    review : "",
    userID: "",
    recipeID: ""
  });

  // function to dynamically update fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({
      ...reviewDetails,
      [name]: value,
    });
  };

  // Function for button
  const btnSubmit = async (e) => {
    e.preventDefault();
    axios
    .post("/recipe/create-review", reviewDetails)
    .then((response) => {
          window.alert("Posted.");
          navigate("/recipe");
    })
    .catch((error) => {
            window.alert("Something went wrong");
    });

  };

  return (
    <div>
      <form className="app__create-box">
        <Formfield 
        labeltitle="Review"
        name="review"
        fieldtype={Text}
        onChange={handleChange}
        />
        <button className="app__create-btn" type="submit" onClick={btnSubmit}> Add Review </button>
      </form>
    </div>
  );
};

export default createReview;