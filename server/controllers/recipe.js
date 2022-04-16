import RecipeDetails from "../models/recipe.js";
//import RecipeProfile from "../models/recipe_prof.js";
import ReviewDetails from "../models/review.js";

/*Recipe Profile*/
export const getRecipe = async (req, res) => {
  try {
    const postRecipes = await PostRecipe.find();

    res.status(200).json(RecipeProfile);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createRecipe = async (req, res) => {
  const recipe = req.body;
  const newRecipe = new PostRecipe(recipe);

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

