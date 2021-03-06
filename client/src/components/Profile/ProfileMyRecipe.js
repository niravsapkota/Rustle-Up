import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import RecipeTile from "./RecipeTile";
import axios from "axios";

export default function ProfileMyRecipe() {
  const navigate = useNavigate();
  const [info, setInfo] = useState([]);
  const [data, setData] = useState([]);
  const [rec, setRec] = useState(false);

  const callProfile = async () => {
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

  const myrecipe = async () => {
    try {
      const res = await axios.get("/recipe/getmyrecipe");
      if (!res) {
        throw new Error("cant find the recipe");
      } else {
        const allData = res.data;
        setData(allData);
        setRec(true);
      }
    } catch (error) {
      console.log("Error Caught!");
    }
  };

  useEffect(() => {
    callProfile();
  }, []);

  useEffect(() => {
    myrecipe();
  }, []);

  if (!data.favourites == 0) {
    setRec(true);
  }

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
            {rec ? (
              <>
                {data.map((element) => (
                  <RecipeTile key={element.title} element={element} />
                ))}
              </>
            ) : (
              <h1>You Have Not Added Any Recipe.</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
