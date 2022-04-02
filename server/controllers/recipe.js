import PostRecipe from "../models/recipe.js";

export const getRecipe = async (req, res) => {
  try {
    const postRecipes = await PostRecipe.find();

    res.status(200).json(postRecipes);
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
