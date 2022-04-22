import React from "react";

export default function Tile(props) {
  return (
    <div className="app__grid-element">
      
      <h3 className="image__title">{props.title}</h3>
      <a className="see__more-link" href="./recipe">
        See More...
      </a>
      <img className="app_web_view-show" src={props.img} alt="none" />
      <p className="image__description">{props.description}</p>
    </div>
  );
}
