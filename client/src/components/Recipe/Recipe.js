import React, { useEffect, useState } from "react";
import { FcEmptyTrash, FcPrint } from "react-icons/fc";
import { HiPencil } from "react-icons/hi";
import RecipeProfile from "./recipe_profile";
import RecipeDetails from "./recipe_details";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function Recipe() {
  const navigate = useNavigate();

  //Recipe
  const [data, setData] = useState([]);
  let { id } = useParams();

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
    getRecipe();
  }, []);

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
            />
          </div>

          {/*Recipe Details*/}

          <div className="app__recipedetails">
            <FcPrint size={35} />

            <HiPencil
              size={35}
              onClick={() =>
                axios
                  .get(`/recipe/get/${id}`)
                  .then(navigate(`/create-recipe/${id}`))
              }
            />

            <FcEmptyTrash
              size={35}
              onClick={() =>
                axios
                  .delete(`/recipe/delete/${id}`)
                  .then(navigate("/profile-my-recipe"))
              }
            />
            <RecipeDetails data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
