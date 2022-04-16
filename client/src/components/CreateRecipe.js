import React,{useState,useEffect} from "react";
import {FormField} from "./Auth/Formfield";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types"

export default function CreateRecipe(props) {

  // initial blank state of form
  const [recipe, setRecipe] = useState({

    title: "",
    user_id:"",
    difficulty:"",
    prep_time: "",
    ingredients: "",
    utensils: "",
    steps:"",
    files:"",
  });

  // function to dynamically update fields
  const handleChange = (e) => {
    console.log(recipe);
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  const btnCreaterecipe = async (e) => {
    e.preventDefault();
    axios
        .post("/recipe/create", recipe)
        .then((response) => {
          console.log(response.data);
        }).catch(()=>console.log("Something is wrong!"))
  }

  return (
    <>
      <form method="POST" className="app__create-box" enctype="multipart/form-data">
        <h1 className="app__sign-up">{props.heading}</h1>
        <FormField labeltitle="Name" name="title" fieldtype={Text} onChange={handleChange}/>
        <FormField labeltitle="Difficulty" name="difficulty" fieldtype={Text} onChange={handleChange}/>
        <FormField labeltitle="Preparation Time" name="prep_time" fieldtype={Text} onChange={handleChange}/>
        <FormField labeltitle="Ingredients" name="ingredients" fieldtype={Text} onChange={handleChange}/>
        <FormField labeltitle="Utensils Required" name="utensils" fieldtype={Text} onChange={handleChange}/>
        <FormField labeltitle="Steps" name="steps" fieldtype="TextArea" onChange={handleChange}/>
        <input type="file" id="app_recipe-img" name="image" />

        <Link
            style={{ color: "#7e7a05", textDecoration: "inherit" }}
            to="/profile-my-recipe"
        >
        <button className="app__create-btn" type="submit" onClick={btnCreaterecipe}>
          Submit
        </button>
        </Link>
      </form> 
  </>
  );
}

CreateRecipe.propTypes = {

  labeltitle:PropTypes.string.isRequired

};


CreateRecipe.defaultProps = {

  labeltitle:"ADD A RECIPE"

}