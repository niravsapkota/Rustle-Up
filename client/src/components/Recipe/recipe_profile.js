import React from "react";

export default function RecipeProfile(props) {
  
  function isFav(x){
    if(x==0){return false}
    else{return true}
  }

  isnotfav = !isFav(props.fav)

  return (
    <div className="app__recipe_profile">
      <img className="app__recipeImg" src={props.img} alt="none" />
      <span className="app__profile-user-card-name">{props.title}</span>
      <p className="app__recipe_profile-details">
        Creator: {props.creator}
      </p>
      <p className="app__recipe_profile-details">
        Difficulty: {props.difficulty}
      </p>
      <p className="app__recipe_profile-details">
        Preparation time: {props.prep_time}
      </p>
      <p className="app__profile-user-card-options">
        {props.logged? (
          <btn>Add to Favs</btn>
        ):(
          <></>
        )
        }
      </p>
    </div>
  );
}
