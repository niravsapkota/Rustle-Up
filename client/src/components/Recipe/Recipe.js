import React, { useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import RecipeProfile from "./recipe_profile";
import RecipeDetails from "./recipe_details";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function Recipe() {
  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);
  const [info, setInfo] = useState([]);
  const [data, setData] = useState([]);
  let { id } = useParams();

  //Logged boolean.
  const callProfile = async () => {
    const res = await axios.get("/profile", {
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
      const res = await axios.get(`/recipe/get/${id}`, {
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

  useEffect(() => {
    callProfile();
  }, []);

  useEffect(() => {
    getRecipe();
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
              creator={info.name}//change, gives current username
              logged={logged}
              fav={info.favourites}
            />
          </div>

          {/*Recipe Details*/}

          <div className="app__recipedetails">
            {logUser ? (
              <div className="app__recipecontrols">
                <MdEdit
                  size={35}
                  onClick={() =>
                    axios
                      .get(`/recipe/get/${id}`)
                      .then(navigate(`/create-recipe/${id}`))
                  }
                />

                <MdDelete
                  size={35}
                  onClick={() => {
                    if (window.confirm("Are you sure?") === true) {
                      axios
                        .delete(`/recipe/delete/${id}`)
                        .then(navigate("/profile-my-recipe"));
                    }
                  }}
                />
              </div>
            ) : (
              <></>
            )}

            <RecipeDetails data={data}/>
          </div>
        </div>
      </div>
    </>
  );
}
