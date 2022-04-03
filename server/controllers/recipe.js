//import RecipeDetails from "../models/recipe_det.js";
import RecipeProfile from "../models/recipe_prof.js";

export const getRecipe = async (req, res) => {
  try {
    const RecipeProfile = await RecipeProfile.find();

    res.status(200).json(RecipeProfile);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createRecipe = async (req, res) => {
  const recipe = req.body;
  const newRecipe = new RecipeProfile(recipe);

  try {
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
