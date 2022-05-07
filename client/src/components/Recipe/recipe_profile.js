import axios from "axios";
import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function RecipeProfile(props) {
  let { id } = useParams();
  const navigate = useNavigate();

  const btnAddToFav = async (e) => {
    e.preventDefault();
    axios
      .post(`/recipe/addToFav/${id}`)
      .then((response) => {
        window.alert("Added to Favourites!");
        navigate("/profile");
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
          navigate("/profile");
        })
        .catch((error) => window.alert("Something went wrong!"));
    }
  };

  return (
    <div className="app__recipe_profile">
      <img className="app__recipeImg" src={props.img} alt="none" />
      <span className="app__profile-user-card-name">{props.title}</span>
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
              <btn onClick={btnDelFromFav}>Delete from Favs</btn>
            ) : (
              <btn onClick={btnAddToFav}>Add to Favs</btn>
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
