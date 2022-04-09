import React from "react";
import pic from "../../assets/unsplash_8T9AVksyt7s.png";
import RecipeProfile from "./recipe_profile";
import RecipeDetails from "./recipe_details";
import RecipeReview from "./recipeReview";

export default function recipe() {
  return (
    <>
      <div className="app__recipe">
      <div className="app__recipebody">
        <div className="app__recipeProfile">
          <RecipeProfile img={pic} title="Title" />
        </div>

        <div className="app__recipedetails">
          <button className="app__printButton">Print</button>
          <RecipeDetails/>
        </div>
      
      </div>

        <div className="app__recipeReview">
          <h2 className="app__recipeReview_header">Reviews</h2>
          <RecipeReview/>
        </div>

      </div>
    </>
  );
}
