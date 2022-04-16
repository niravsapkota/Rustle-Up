import React, { useState } from "react";
import Formfield from "./Formfield";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const createRecipe = () => {
//   const navigate = useNavigate();

//   // initial blank state of form
//   const [details, setReview] = useState({
//     review : ""
//   });

//   // function to dynamically update fields
//   const handleChange = (e) => {
//     const { review, value } = e.target;
//     setReview({
//       ...details,
//       [review]: value,
//     });
//   };

//   // Function for button
//   const btnSubmit = async (e) => {
//     e.preventDefault();
//     const { review } = details;
//       axios
//     .post("/recipe", details)
//     .then((response) => {
//           window.alert("Posted.");
//           navigate("/recipe");
//     })
//     .catch((error) => {
//             window.alert("Something went wrong");
//     });

//   };

//   return (
//     <div>
//       <form className="app__create-box">
//         <Formfield 
//          labeltitle="Review"
//          fieldtype={Text}
//          onChange={handleChange}
//         />
//         <button className="app__create-btn" type="submit" onClick={btnSubmit}>Submit</button>
//       </form>
//     </div>
//   );
};

export default createRecipe;
