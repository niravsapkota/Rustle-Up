import React from "react";

export default function RecipeProfile(props) {
  return (
    <div className="app__recipe_profile">
      <img className="app__recipeImg" src={props.img} alt="none" />
      <h2 className="app__image_title">{props.title}</h2>
      <p className="app__recipeAuthor">Author</p>
      <p className="app__prepTime">Preparation Time : N hrs</p>
      <p className="app__difficultyRaing">Difficulty : 3/5</p>
      <p className="app__recipeRating">Rating : 4/5</p>
      <span className="app__recipeButtons">
        <button className="app__ratingButton">Give a Rating</button>
        <button className="app__reviewButton">Leave a Review</button>
      </span>
    </div>
  );
}
