import React from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/api";

export default function Tile(props) {
  const navigate = useNavigate();

  return (
    <div
      className="app__grid-element"
      onClick={() =>
        axiosInstance
          .get(`/recipe/get/${props.element._id}`)
          .then(navigate(`/recipe/${props.element._id}`))
      }
    >
      <h3 className="image__title">{props.element.title}</h3>
      {/* <a
        className="see__more-link"
        onClick={() =>
          axiosInstance
            .get(`/recipe/get/${props.element._id}`)
            .then(navigate(`/recipe/${props.element._id}`))
        }
      >
        See More
      </a> */}
      <img className="app_web_view-show" src={props.img} alt="none" />
      <p className="image__description">{props.description}</p>
    </div>
  );
}
