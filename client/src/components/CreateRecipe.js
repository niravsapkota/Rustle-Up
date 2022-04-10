import React from "react";
import {TextField,DropdownMenu} from "./Auth/Formfield";

export default function CreateRecipe() {
  return (
    <>
      <form className="app__create-box">
        <h1 className="app__sign-up">Create Recipe</h1>
        <TextField labeltitle="Name" fieldtype={Text} phvalue="Provide full name if possible"/>
        <DropdownMenu labeltitle="Difficulty" fieldtype={Text}/>
        <DropdownMenu labeltitle="Preparation Time" fieldtype={Text}/>
        <TextField labeltitle="Ingredients" fieldtype={Text} />
        <DropdownMenu labeltitle="Utensils Required"/>
        <button className="app__create-btn">Submit</button>
      </form>
    </>
  );
}
