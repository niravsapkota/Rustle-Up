import React from "react";
import userimg from "../assets/userimg.jpg";
import RecipeTile from "./RecipeTile";
import pic from "../assets/unsplash_8T9AVksyt7s.png";

export default function Profile() {
  return (
    <>
      <div className="app__profile-container">
        <div className="app__profile-user-card">
          <div>
            <img src={userimg}></img>
          </div>
          <span className="app__profile-user-card-name">John Doe</span>
          <p>Member Since: 2022/03/05</p>
          <p>Favourites: 4</p>
          <p>Recipes Posted: 3</p>
          <p className="app__profile-user-card-options">
            <span>Create Recipe</span>
            <span>Manage Profile</span>
            <span>Logout</span>
          </p>
        </div>
        <div className="app__profile-recipe-card">
          <span className="app__profile-recipe-card-fav">Favourites</span>
          <span className="app__profile-recipe-card-myrecipe">My Recipes</span>
          <div className="app__profile-recipe-card-container">
            <RecipeTile
              img={pic}
              title="Samosa"
              description="A very well known snacks in south east asia. Its shell is made of flour and inside is the vegetables chopped off and served with sauces"
            />
            <RecipeTile
              img={pic}
              title="Samosa"
              description="A very well known snacks in south east asia. Its shell is made of flour and inside is the vegetables chopped off and served with sauces"
            />
            <RecipeTile
              img={pic}
              title="Samosa"
              description="A very well known snacks in south east asia. Its shell is made of flour and inside is the vegetables chopped off and served with sauces"
            />
          </div>
          <p className="app__profile-next">Next</p>
        </div>
      </div>
    </>
  );
}
