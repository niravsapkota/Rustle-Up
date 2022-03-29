import React from "react";
import { NavLink } from "react-router-dom";
import userimg from "../assets/userimg.jpg";
import RecipeTile from "./RecipeTile";
import pic from "../assets/unsplash_8T9AVksyt7s.png";

export default function ProfileMyRecipe() {
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
          <NavLink
            className={({ isActive }) =>
              isActive ? "profile-active" : "profile-inactive"
            }
            to="/profile"
            exact
            activeClassName="profile-active"
          >
            Favourites
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "profile-active" : "profile-inactive"
            }
            to="/profile-my-recipe"
            exact
          >
            My Recipes
          </NavLink>

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
