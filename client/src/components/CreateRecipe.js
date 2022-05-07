import React, { useState, useEffect } from "react";
import FormField from "./Auth/Formfield";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export function CreateRecipe() {
  // initial blank state of form
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    user_id: "",
    difficulty: "",
    prep_time: "",
    ingredients: "",
    utensils: "",
    steps: "",
    url: "",
  });

  const navigate = useNavigate();

  const [image, setImage] = useState("");

  // function to dynamically update fields
  const handleChange = (e) => {
    console.log(recipe);
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const btnCreaterecipe = async (e) => {
    e.preventDefault();
    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "rustleup");
      const dataRes = await axios.post(
        "https://api.cloudinary.com/v1_1/nrvserver/image/upload",
        formData
      );
      const imageUrl = dataRes.data.url;
      recipe.url = imageUrl;
    }
    axios
      .post("/recipe/create", recipe)
      .then((response) => {
        window.alert("Recipe created.");
        navigate("/profile");
      })
      .catch((error) => window.alert("Something went wrong!"));
  };

  return (
    <>
      <form
        method="POST"
        className="app__create-box"
        enctype="multipart/form-data"
      >
        <h1 className="app__sign-up">ADD A RECIPE</h1>
        <FormField
          labeltitle="Name"
          id="app__name-input"
          name="title"
          fieldtype={Text}
          onChange={handleChange}
        />
        <FormField
          labeltitle="Description"
          id="app__name-input"
          name="description"
          fieldtype={Text}
          onChange={handleChange}
        />
        <FormField
          labeltitle="Difficulty"
          id="app__name-input"
          name="difficulty"
          fieldtype={Text}
          onChange={handleChange}
        />
        <FormField
          labeltitle="Preparation Time"
          id="app__name-input"
          name="prep_time"
          fieldtype={Text}
          onChange={handleChange}
        />
        <FormField
          labeltitle="Ingredients"
          id="app__name-input"
          name="ingredients"
          phvalue="Separate with comma(,)"
          fieldtype={Text}
          onChange={handleChange}
        />
        <FormField
          labeltitle="Utensils Required"
          id="app__name-input"
          name="utensils"
          phvalue="Separate with comma(,)"
          fieldtype={Text}
          onChange={handleChange}
        />
        <FormField
          labeltitle="Steps"
          id="app__name-input"
          name="steps"
          phvalue="Separate with dashed-arrow(->)"
          fieldtype="TextArea"
          onChange={handleChange}
        />
        <FormField
          labeltitle="Profile Image"
          id="app-name-file"
          name="image"
          fieldtype="file"
          accept="image/"
          onChange={handleFileChange}
        />

        <button
          className="app__create-btn"
          type="submit"
          onClick={btnCreaterecipe}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export function EditRecipe() {
  // initial fill state of form
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({});

  const [image, setImage] = useState("");

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
        const result = res.data;
        setRecipe({
          title: result.title,
          description: result.description,
          difficulty: result.difficulty,
          prep_time: result.prep_time,
          ingredients: `${result.ingredients.join(",")}`,
          utensils: `${result.utensils.join(",")}`,
          steps: `${result.steps.join("->")}`,
        });
      }
    } catch (error) {
      console.log("Error Caught!");
    }
  };

  useEffect(() => {
    getRecipe();
  }, []);

  // function to dynamically update fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const btnUpdaterecipe = async (e) => {
    e.preventDefault();
    axios
      .patch(`/recipe/edit/${id}`, recipe)
      .then((response) => {
        console.log(response.data);
        window.alert("updated");
        navigate(`/recipe/${id}`);
      })
      .catch(() => console.log("Something is wrong!"));
  };

  return (
    <>
      <form
        method="PATCH"
        className="app__create-box"
        enctype="multipart/form-data"
      >
        <h1 className="app__sign-up">UPDATE THE RECIPE</h1>
        <FormField
          labeltitle="Name"
          id="app__name-input"
          name="title"
          fieldtype={Text}
          onChange={handleChange}
          value={recipe.title}
        />
        <FormField
          labeltitle="Description"
          id="app__name-input"
          name="description"
          fieldtype={Text}
          onChange={handleChange}
          value={recipe.description}
        />
        <FormField
          labeltitle="Difficulty"
          id="app__name-input"
          name="difficulty"
          fieldtype={Text}
          onChange={handleChange}
          value={recipe.difficulty}
        />
        <FormField
          labeltitle="Preparation Time"
          id="app__name-input"
          name="prep_time"
          fieldtype={Text}
          onChange={handleChange}
          value={recipe.prep_time}
        />
        <FormField
          labeltitle="Ingredients"
          id="app__name-input"
          name="ingredients"
          fieldtype={Text}
          onChange={handleChange}
          value={recipe.ingredients}
        />
        <FormField
          labeltitle="Utensils Required"
          id="app__name-input"
          name="utensils"
          fieldtype={Text}
          onChange={handleChange}
          value={recipe.utensils}
        />
        <FormField
          labeltitle="Steps"
          id="app__name-input"
          name="steps"
          fieldtype="TextArea"
          onChange={handleChange}
          value={recipe.steps}
        />

        <Link
          style={{ color: "#7e7a05", textDecoration: "inherit" }}
          to="/profile-my-recipe"
        >
          <button
            className="app__create-btn"
            type="submit"
            onClick={btnUpdaterecipe}
          >
            Update
          </button>
        </Link>
      </form>
    </>
  );
}
