import React from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/api";

export default function RecipeTile(props) {
  const navigate = useNavigate();

  return (
    <div
      className="app__recipe-tile"
      onClick={() =>
        axiosInstance
          .get(`/recipe/get/${props.element._id}`)
          .then(navigate(`/recipe/${props.element._id}`))
      }
    >
      <img className="recipe-img" src={props.element.image_url} alt="none" />
      <div className="recipe-text-container">
        <h3 className="recipe-img-title">{props.element.title}</h3>
        <p className="recipe-description">{props.element.description}</p>
      </div>
    </div>
  );
}
