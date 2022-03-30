import React from "react";

export default function TrendingTile(props) {
  return (
    <div className="app__trending-tile">
      <img className="trending-img" src={props.img} alt="none" />
      <div className="trending-text-container">
        <h3 className="trending-img-title">{props.title}</h3>
        <p className="trending-description">{props.description}</p>
      </div>
    </div>
  );
}
