import "./Main.css";
import React from "react";
import Tile from "./Tile";
import pic from "../assets/unsplash_8T9AVksyt7s.png";

export default function Main() {
  return (
    <>
      <title>Rustle Up</title>

      <section className="app__section-hero">
        <div className="app__hero-img"></div>
        <div className="app__hero-container">
          <div className="app__hero-line">Find the CHEF in YOU</div>
          <div className="app__hero-para">
            Experience the joy of cooking in the comfort of your own kitchen.
          </div>
          <button className="app__subscribe-btn">Login/Register Now</button>
        </div>
      </section>

      <section className="app__mid-section">
        <h1 className="app__mid-section-title">
          Check Out The Trending Recipes
        </h1>
        <div className="app__grid-container">
          <Tile
            img={pic}
            title="Samosa"
            description="A very well known snacks in south east asia. Its shell is made of flour and inside is the vegetables chopped off and served with sauces"
          />
          <Tile
            img={pic}
            title="Chicken Chilly"
            description="A very well known snacks in south east asia. Its shell is made of flour and inside is the vegetables chopped off and served with sauces"
          />
          <Tile
            img={pic}
            title="Mutton Momo"
            description="A very well known snacks in south east asia. Its shell is made of flour and inside is the vegetables chopped off and served with sauces"
          />
          <Tile
            img={pic}
            title="Chiya"
            description="A very well known snacks in south east asia. Its shell is made of flour and inside is the vegetables chopped off and served with sauces"
          />
          <Tile
            img={pic}
            title="Pakoda"
            description="A very well known snacks in south east asia. Its shell is made of flour and inside is the vegetables chopped off and served with sauces"
          />
          <Tile
            img={pic}
            title="Sizzler"
            description="A very well known snacks in south east asia. Its shell is made of flour and inside is the vegetables chopped off and served with sauces"
          />
          <Tile
            img={pic}
            title="Dal Bhat"
            description="A very well known snacks in south east asia. Its shell is made of flour and inside is the vegetables chopped off and served with sauces"
          />
          <Tile
            img={pic}
            title="Cake"
            description="A very well known snacks in south east asia. Its shell is made of flour and inside is the vegetables chopped off and served with sauces"
          />
          <Tile
            img={pic}
            title="Icecream"
            description="A very well known snacks in south east asia. Its shell is made of flour and inside is the vegetables chopped off and served with sauces"
          />
        </div>
      </section>

      <section className="app__last-section">
        <h1 className="app_perks-title">Amazing Perks for Registered Users</h1>
        <h2>Rate the Recipes</h2>
        <h2>Leave a Review</h2>
        <h2>Add to your favourites</h2>
        <h2>Post your own recipe</h2>
        <div className="app__hightlight">Register Here</div>
      </section>
    </>
  );
}
