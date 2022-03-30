import React from "react";

export default function RecipeTile(props) {
  return (
    <div className="app__recipe-tile">
      <img className="recipe-img" src={props.img} alt="none" />
      <div className="recipe-text-container">
        <h3 className="recipe-img-title">{props.title}</h3>
        <p className="recipe-description">{props.description}</p>
      </div>
    </div>
  );
}
