import React from "react";
import Formfield from "./Auth/Formfield";

export default function CreateRecipe() {
  return (
    <>
      <form className="app__create-box">
        <h1 className="app__sign-up">Create Recipe</h1>
        <Formfield labeltitle="Name" fieldtype={Text} />
        <Formfield labeltitle="Difficulty" fieldtype={Text} />
        <Formfield labeltitle="Preparation Time" fieldtype={Text} />
        <Formfield labeltitle="Ingredients" fieldtype={Text} />
        <Formfield labeltitle="Utensils Required" fieldtype={Text} />
        <Formfield labeltitle="Procedure" fieldtype={Text} />
        <button className="app__create-btn">Submit</button>
      </form>
    </>
  );
}
