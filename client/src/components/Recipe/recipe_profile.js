import axios from "axios";
import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function RecipeProfile(props) {
  let { id } = useParams();
  const navigate = useNavigate();

  let f = props.fav;

  const btnAddToFav = async (e) => {
    e.preventDefault();
    axios
      .post(`/recipe/addToFav/${id}`)
      .then((response) => {
        window.alert("Added to Favourites!");
        window.location.reload();
      })
      .catch((error) => {
        if (error.response.status === 400) {
          window.alert("Already added");
        } else {
          window.alert("Something went wrong");
        }
      });
  };

  const btnDelFromFav = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure?") === true) {
      axios
        .post(`/recipe/delfromfav/${id}`)
        .then((response) => {
          window.alert("Removed from Favourites!");
          navigate("/profile");
        })
        .catch((error) => window.alert("Something went wrong!"));
    }
  };

  return (
    <div className="app__recipe_profile">
      <img className="app__recipeImg" src={props.img} alt="none" />
      <span className="app__profile-user-card-name">{props.title}</span>
      <p className="app__recipe_profile-details">Creator: {props.creator}</p>
      <p className="app__recipe_profile-details">
        Difficulty: {props.difficulty}
      </p>
      <p className="app__recipe_profile-details">
        Preparation time: {props.prep_time}
      </p>
      <p className="app__profile-user-card-options">
        {props.logged ? (
          <p>
            {props.fav ? (
              <button onClick={btnDelFromFav}>Delete from Favs</button>
            ) : (
              <button onClick={btnAddToFav}>Add to Favs</button>
            )}
          </p>
        ) : (
          <Link
            style={{ color: "#7e7a05", textDecoration: "inherit" }}
            to="/login"
          >
            Log In to Favourite
          </Link>
        )}
      </p>
    </div>
  );
}
