import React from "react";
import userimg from "../assets/userimg.jpg";

export default function SignUp() {
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
        <div className="app__profile-recipe-card"></div>
      </div>
    </>
  );
}
