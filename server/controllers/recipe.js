import mongoose from "mongoose";
import PostRecipe from "../models/recipe.js";
import User from "../models/user.js";

/*Recipe Profile*/
export const getAll = async (req, res) => {
  let { size } = req.query;

  if (!size) {
    size = 3;
  }
  const limit = parseInt(size);

  try {
    const recipes = await PostRecipe.find()
      .sort({ viewsCount: -1, createdAt: -1 })
      .limit(limit);
    res.status(200).json(recipes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getMyRecipe = async (req, res) => {
  try {
    const userId = req.user._id.toString();
    const recipes = await PostRecipe.find({ creator: userId });
    res.status(200).json(recipes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getFavRecipe = async (req, res) => {
  try {
    const recipes = await PostRecipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/*Recipe*/
export const getRecipe = async (req, res) => {
  try {
    let recipe = await PostRecipe.findById(req.params.id);
    const viewsCount = recipe.viewsCount + 1;
    recipe = await PostRecipe.findByIdAndUpdate(req.params.id, { viewsCount });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
/*delete recepie*/
export const deleteRecipe = async (req, res) => {
  try {
    const userId = req.user._id.toString();
    const recipeId = req.params.id;
    const userUpdate = await User.findByIdAndUpdate(userId, {
      $inc: { myrecipe: -1 },
      $pull: { myrecipe_id: recipeId },
    });
    const recipe = await PostRecipe.findByIdAndDelete(recipeId);

    res.status(202).json({ message: `Deleted Successfully` });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createRecipe = async (req, res) => {
  const userId = req.user._id.toString();
  const title = req.body.title;
  const description = req.body.description;
  const difficulty = req.body.difficulty;
  const prep_time = req.body.prep_time;
  const ingredients = req.body.ingredients.split(",");
  const utensils = req.body.utensils.split(",");
  const steps = req.body.steps.split("->");
  const url = req.body.url;

  const newRecipe = new PostRecipe({
    title,
    description,
    difficulty,
    prep_time,
    ingredients,
    utensils,
    steps,
    image_url: url,
    creator: userId,
  });

  try {
    await newRecipe.save();
    const savedRecipe = await PostRecipe.findOne({ title });
    const recipeId = savedRecipe._id;
    const recUpdate = await User.findByIdAndUpdate(userId, {
      $inc: { myrecipe: 1 },
      $push: { myrecipe_id: recipeId },
    });
    res.status(201).json(recUpdate);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const editRecipe = async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const difficulty = req.body.difficulty;
  const prep_time = req.body.prep_time;
  const ingredients = req.body.ingredients;
  const utensils = req.body.utensils;
  const steps = req.body.steps;

  try {
    const updatedRecipe = await PostRecipe.findByIdAndUpdate(id, {
      title,
      difficulty,
      prep_time,
      ingredients,
      utensils,
      steps,
    });
    res.json(updatedRecipe);
  } catch (error) {
    console.log(error);
  }
};

export const addToFav = async (req, res) => {
  const currentEmail = req.user.email;
  const recipeId = req.params.id;
  if (recipeId) {
    const addFav = await User.findOneAndUpdate(
      { email: currentEmail },
      {
        $inc: { favourites: 1 },
        $push: { fav_id: recipeId },
      }
    );
    res.status(200).json("added");
  } else {
    res.status(500).send("something went wrong");
  }
};

export const deletefromFav = async (req, res) => {
  const currentEmail = req.user.email;
  const recipeId = req.body.recipeId;
  const recId = mongoose.Types.ObjectId(recipeId);
  if (recipeId) {
    const delFav = await User.findOneAndUpdate(
      { email: currentEmail },
      { $pull: { fav_id: recId }, $inc: { favourites: -1 } },
      { new: true }
    );

    res.status(200).json("deleted");
  } else {
    res.status(500).send("something went wrong");
  }
};
