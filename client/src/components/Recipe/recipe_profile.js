import React from "react";

export default function RecipeProfile(props) {

  return (
    <div className="app__recipe_profile">
      <img className="app__recipeImg" src={props.img} alt="none" />
      <h2 className="app__image_title">{props.title}</h2>
    </div>
  );
}
