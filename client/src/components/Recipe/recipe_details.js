import React from "react";


export default function RecipeDetails(props) {

  const { ingredients: ingredients, utensils: utensils, steps: steps } = props.data;
  if (ingredients) {
    ingredients.forEach(element => {
      document.getElementById("app__ingredients").innerHTML += `<li>${element}</li>`
    });
  }

  if (utensils) {
    utensils.forEach(element => {
      document.getElementById("app__utensilsreq").innerHTML += `<li>${element}</li>`
    });
  }

  if (steps) {
    steps.forEach(element => {
      document.getElementById("app__procedure").innerHTML += `<li>${element}</li>`
    });
  }


  return (
    <>
      <div id="app__ingredients">
        <h2>Ingredients</h2>
        <ul>
        </ul>
      </div>

      <div id="app__utensilsreq">
        <h2>Utensils</h2>
        <ul>
        </ul>
      </div>

      <div id="app__procedure">
        <h2>Procedure</h2>
        <ol>

        </ol>
      </div>
    </>
  );
}
