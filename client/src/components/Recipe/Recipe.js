import React, { useEffect, useState } from "react";
import { FcEmptyTrash, FcPrint } from "react-icons/fc";
import { HiPencil } from "react-icons/hi"
import pic from "../../assets/unsplash_8T9AVksyt7s.png";
import RecipeProfile from "./recipe_profile";
import RecipeDetails from "./recipe_details";
import RecipeReview from "./recipeReview";
import axios from "axios";
import FormField from "../Auth/Formfield";
import { useParams, useNavigate, Link } from "react-router-dom";
import createReview from "../CreateReview";


export default function Recipe() {
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
  }

  const [data, setData] = useState([])
  let { id } = useParams();

  const getRecipe = async () => {
    try {
      const res = await axios.get(`/recipe/get/${id}`, {
        headers: {
          "Access-Control-Allow-Credentials": true,
          "Content-Type": "application/json",
        },
      });
      if (!res) {
        throw new Error("cant find the recipe");
      } else {
        const allData = res.data;
        setData(allData);
      }
    } catch (error) {
      console.log("Error Caught!");
    }

  }

  useEffect(() => {
    getRecipe();
  }, []);


  return (
    <>
      <div className="app__recipe">
        <div className="app__recipebody">
          
          <div className="app__recipeProfile">
            <RecipeProfile img={pic} title={data.title} />
          </div>

          <div className="app__recipedetails">
            <FcPrint size={35}/>

            <HiPencil size={35} onClick={
              () => axios.get(`/recipe/get/${id}`).
                then(
                  navigate(`/create-recipe/${id}`)
                )} />
          
            <FcEmptyTrash size={35} onClick={
              () => axios.delete(`/recipe/delete/${id}`).
                then(
                  navigate("/profile-my-recipe")
                )} />
            <RecipeDetails data={data} />
          </div>

        </div>
{/**/}
        <div className="app__recipeReview">

          <h1 className="app__recipeReview_header">Reviews</h1>
          <form className="app__create-box2">
            
            <FormField 
              labeltitle="Write Review :"
              name="review"
              fieldtype={Text}
              onChange={handleChange}
            />
          <button className="app__create-btn" type="submit" onClick={btnSubmit}> Add Review </button>
        </form>

          <hr></hr>
          <RecipeReview />

        </div>
      </div>
    </>
  );
}
