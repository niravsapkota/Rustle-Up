//import RecipeDetails from "../models/recipe_det.js";
//import RecipeProfile from "../models/recipe_prof.js";
import axios from "axios";
import PostRecipe from "../models/recipe.js";
import ReviewDetails from "../models/review.js";

axios.get('/recipe/create').then((response)=>console.log(response)).catch(()=>console.log("GET REQUEST UNSUCCESSFUL"));

/*Recipe Profile*/
export const getRecipe = async (req, res) => {
  try {
    const allRecipes = await PostRecipe.find();

    res.status(200).json(allRecipes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createRecipe = async (req, res) => {
  
  const title = req.body.title;
  const difficulty = req.body.difficulty;
  const prep_time = req.body.prep_time;
  const ingredients = req.body.ingredients.split(',');
  const utensils = req.body.utensils.split(',');
  const steps = req.body.steps.split('->');


  const newRecipe = new PostRecipe(
    {
      title,
      difficulty,
      prep_time,
      ingredients,
      utensils,
      steps
    });

  try {
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

/*Recipe Details*/
export const getRecipeDet = async (req, res) => {
  try {
    const RecipeDetails = await RecipeDetails.find();

    res.status(200).json(RecipeDetails);
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createRecipeDet = async (req, res) => {
  const recipe = req.body;
  const newRecipe = new RecipeDetails(recipe);

  try {
    await newRecipe.save();
    res.status(201).json(newRecipe);
  }
  catch (error) {
    res.status(409).json({ message: error.message });
  }
};

/*Review*/
export const getReview = async (req, res) => {
  try {
    const Review = await ReviewDetails.find();

    res.status(200).json(Review);
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createReview = async (req, res) => {
  const recipe = req.body;
  const newReview = new ReviewDetails(recipe);

  try {
    await newReview.save();
    res.status(201).json(newReview);
  }
  catch (error) {
    res.status(409).json({ message: error.message });
  }
};

