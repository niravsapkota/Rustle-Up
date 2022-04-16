import React, { useEffect, useState } from "react";
import { FcEmptyTrash, FcExpand, FcFullBattery, FcFullTrash } from "react-icons/fc";
import { HiPencil } from "react-icons/hi"
import pic from "../../assets/unsplash_8T9AVksyt7s.png";
import RecipeProfile from "./recipe_profile";
import RecipeDetails from "./recipe_details";
import RecipeReview from "./recipeReview";
import axios from "axios";
import FormField from "../Auth/Formfield";
import { useParams, useNavigate } from "react-router-dom";
import createReview from "../CreateReview";


export default function Recipe() {

  const navigate = useNavigate();

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
            <button className="app__printButton">Print</button>

            <HiPencil size={35} onClick={
              () => axios.get(`/recipe/get/${id}`).
                then(
                  navigate(`/create-recipe/${id}`)
                )} />
            <button className="app__printButton">Print</button>

            <HiPencil size={35}/>
            <FcFullBattery size={35} onClick={
              () => axios.delete(`/recipe/delete/${id}`).
                then(
                  navigate("/profile-my-recipe")
                )} />
            <RecipeDetails data={data} />
          </div>

        </div>

        <div className="app__recipeReview">
          
          <form className="app__create-box">
            <h1 className="app__recipeReview_header">Reviews</h1>
            <FormField labeltitle="" fieldtype={Text} />
            <button className="app__create-btn"> Add Review </button> 
            {/* <createReview/> */}
            <hr></hr>
            <RecipeReview />
          </form>
          {/* <createReview/> */}
         
        </div>

      </div>
    </>
  );
}
