import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import userimg from "../../assets/userimg.jpg";
import RecipeTile from "./RecipeTile";
import axios from "axios";
import pic from "../../assets/unsplash_8T9AVksyt7s.png";

export default function Profile() {
  const navigate = useNavigate();
  const [info, setInfo] = useState([]);

  const callProfile = async () => {
    // axios
    //   .get("/profile", {
    //     headers: {
    //       "Access-Control-Allow-Credentials": true,
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     value = response.json();
    //   })
    //   .catch((error) => {
    //     navigate("/login");
    //   });

    try {
      const res = await axios.get("/profile", {
        headers: {
          "Access-Control-Allow-Credentials": true,
          "Content-Type": "application/json",
        },
      });
      if (!res) {
        throw new Error("cant login");
      } else {
        const value = res.data;
        setInfo(value);
      }
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    callProfile();
  }, []);

  const btnLogout = async (e) => {
    e.preventDefault();
    axios
      .get("auth/logout", {
        headers: {
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => {
        window.alert("Unsuccessfull");
      });
  };

  return (
    <>
      <div className="app__profile-container">
        <div className="app__profile-user-card">
          <div>
            <img src={info.image_url}></img>
          </div>
          <span className="app__profile-user-card-name">{info.name}</span>
          <p>Member Since: {info.created_at}</p>
          <p>Favourites: {info.favourites}</p>
          <p>Recipes Posted: {info.myrecipe}</p>
          <p className="app__profile-user-card-options">
            <btn>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/create-recipe"
              >
                Create Recipe
              </Link>
            </btn>
            <btn>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/manage-profile"
              >
                Manage Profile
              </Link>
            </btn>
            <btn type="submit" onClick={btnLogout}>
              Logout
            </btn>
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
