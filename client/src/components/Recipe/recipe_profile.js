import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function RecipeProfile(props) {
  let {id} = useParams();

  function isFav(x){
    if(x==0){return false}
    else{return true}
  }

  let isfav = isFav(props.fav);

  const btnAddToFav = async(e)=> {
    e.preventDefault();
    axios
      .post(`/recipe/addToFav/${id}`)
      .then((response) => {
        window.alert("Added to Favourites!");
      })
      .catch((error) => window.alert("Something went wrong!"));
  };
  
  const btnDelFromFav = async(e)=> {
    e.preventDefault();
    axios
      .post(`/recipe/delfromfav/`)
      .then((response) => {
        window.alert("Removed from Favourites!");
      })
      .catch((error) => window.alert("Something went wrong!"));
  };

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
              <btn
                onClick={btnDelFromFav}
              >
                Delete from Favs
              </btn>
            ):(
              <btn
                onClick={btnAddToFav}
              >
                Add to Favs
              </btn>
              )
            }
          </p>
        ):(
            <Link
              style={{ color: "#7e7a05", textDecoration: "inherit" }}
              to="/login"
            >
              Log In to Favourite
            </Link>
          )
        }
      </p>
    </div>
  );
}
