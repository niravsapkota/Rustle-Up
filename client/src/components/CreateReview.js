import React, { useState } from "react";
import Formfield from "./Auth/Formfield";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { prototype } from "events";
// import ReviewDetails from "../../../../server/models/review";

const createReview = () => {
  const navigate = useNavigate();

  // initial blank state of form
  const [details, setReview] = useState({
    review : "",
    userID: "",
    recipeID: ""
  });

  // function to dynamically update fields
  const handleChange = (e) => {
    const { review, value } = e.target;
    setReview({
      ...details,
      [review]: value,
    });
  };

  // Function for button
  const btnSubmit = async (e) => {
    e.preventDefault();
    const { review } = details;
      axios
    .post("/recipe/create-review", details)
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
        <button className="app__create-btn" type="submit" onClick={btnSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default createReview;