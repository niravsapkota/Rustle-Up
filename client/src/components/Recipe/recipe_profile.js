import React from "react";
import { Link } from "react-router-dom";

export default function RecipeProfile(props) {
  
  function isFav(x){
    if(x==0){return false}
    else{return true}
  }

  let isfav = isFav(props.fav)

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
          <p>
            {isfav?(
              <btn>Delete from Favs</btn>
            ):(
              <btn>Add to Favs</btn>
              )
            }
          </p>
        ):(
            <Link to="/login">Log In to Favourite</Link>
          )
        }
      </p>
    </div>
  );
}
