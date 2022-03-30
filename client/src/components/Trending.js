import React from "react";
import TrendingTile from "./TrendingTile";
import pic from "../assets/unsplash_8T9AVksyt7s.png";

export default function() {
  return (
    <>
      <p className="app__trending-title">Trending</p>
      <div className="app__trending-container">
        <TrendingTile
          img={pic}
          title="Samosa"
          description="A very well known snacks in south east asia. Its shell is made of flour and inside is the vegetables chopped off and served with sauces"
        />
        <TrendingTile
          img={pic}
          title="Samosa"
          description="A very well known snacks in south east asia. Its shell is made of flour and inside is the vegetables chopped off and served with sauces"
        />
        <TrendingTile
          img={pic}
          title="Samosa"
          description="A very well known snacks in south east asia. Its shell is made of flour and inside is the vegetables chopped off and served with sauces"
        />
        <p className="app__trending-next">Next</p>
      </div>
    </>
  );
}
