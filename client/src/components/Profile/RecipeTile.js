import React from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeTile(props) {
  const navigate = useNavigate();

  return (
    <div 
      className="app__recipe-tile"
      onClick={() =>
        axios
          .get(`/recipe/get/${props.element._id}`)
          .then(navigate(`/recipe/${props.element._id}`))
        }
      >
      <img className="recipe-img" src={props.element.image_url} alt="none" />
      <div className="recipe-text-container">
        <h3 className="recipe-img-title">{props.element.title}</h3>
        <p className="recipe-description">{props.element.description}</p>
        <MdDelete
                  size={35}
                  onClick={() => {
                    if (window.confirm("Are you sure?") === true) {
                      axios
                        .delete(`/recipe/delete/${id}`)
                        .then(navigate("/profile-my-recipe"));
                    }
                  }}
          />
      </div>
    </div>
  );
}
