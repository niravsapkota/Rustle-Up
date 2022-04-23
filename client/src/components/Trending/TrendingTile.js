import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TrendingTile(props) {
  const navigate = useNavigate();

  return (
    <div
      className="app__trending-tile"
      onClick={() =>
        axios
          .get(`/recipe/get/${props.element._id}`)
          .then(navigate(`/recipe/${props.element._id}`))
      }
    >
      <img className="trending-img" src={props.img} alt="none" />
      <div className="trending-text-container">
        <h3 className="trending-img-title">{props.element.title}</h3>
        <p className="trending-description">{props.description}</p>
      </div>
    </div>
  );
}
