import React, { useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import RecipeProfile from "./recipe_profile";
import RecipeDetails from "./recipe_details";
import axiosInstance from "..//../utils/api";
import { useParams, useNavigate } from "react-router-dom";

export default function Recipe() {
  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);
  const [isfav, setIsfav] = useState(false);
  const [info, setInfo] = useState([]);
  const [data, setData] = useState([]);
  let { id } = useParams();

  //Logged boolean.
  const callProfile = async () => {
    const res = await axiosInstance.get("/profile", {
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
      },
    });
    if (res) {
      const value = res.data;
      setInfo(value);
      setLogged(true);
    } else {
      setLogged(false);
    }
  };

  //Recipe
  const getRecipe = async () => {
    try {
      const res = await axiosInstance.get(`/recipe/get/${id}`, {
        headers: {
          "Access-Control-Allow-Credentials": true,
          "Content-Type": "application/json",
        },
      });
      if (!res) {
        throw new Error("cant find the recipe");
      } else {
        const allData = res.data;
        setData(allData);
      }
    } catch (error) {
      console.log("Error Caught!");
    }
  };

  const checkFav = async () => {
    const res = await axiosInstance.get(`/recipe/checkfav/${id}`, {
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
      },
    });
    if (res) {
      setIsfav(true);
    }
  };

  useEffect(() => {
    callProfile();
  }, []);

  useEffect(() => {
    getRecipe();
  }, []);

  useEffect(() => {
    checkFav();
  }, []);

  let idmatch = info._id == data.creator;
  let logUser = idmatch && logged;
  return (
    <>
      <div className="app__recipe">
        <div className="app__recipebody">
          {/* Recipe Profile */}
          <div className="app__recipeProfile">
            <RecipeProfile
              img={data.image_url}
              title={data.title}
              difficulty={data.difficulty}
              prep_time={data.prep_time}
              logged={logged}
              fav={isfav}
            />
          </div>

          {/*Recipe Details*/}

          <div className="app__recipedetails">
            {logUser ? (
              <div className="app__recipecontrols">
                <MdEdit
                  size={35}
                  onClick={() =>
                    axiosInstance
                      .get(`/recipe/get/${id}`)
                      .then(navigate(`/create-recipe/${id}`))
                  }
                />

                <MdDelete
                  size={35}
                  onClick={() => {
                    if (window.confirm("Are you sure?") === true) {
                      axiosInstance
                        .delete(`/recipe/delete/${id}`)
                        .then(navigate("/profile-my-recipe"));
                    }
                  }}
                />
              </div>
            ) : (
              <></>
            )}

            <RecipeDetails data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
