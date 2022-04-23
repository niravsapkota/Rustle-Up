import mongoose from "mongoose";
import PostRecipe from "../models/recipe.js";
import ReviewDetails from "../models/review.js";
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

export const getRecipe = async (req, res) => {
  try {
    const recipe = await PostRecipe.findById(req.params.id);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    // const userId = req.user._id;
    // const recipeId = req.params.id;
    // const owner = await User.findOne({ recipeId });
    // if (owner._id == userId) {
    //   const recipe = await PostRecipe.findByIdAndDelete(recipeId);
    //   const recId = mongoose.Types.ObjectId(recipeId);
    //   const delFav = await User.findByIdAndUpdate(
    //     userId,
    //     { $pull: { myrecipe_id: recId }, $inc: { myrecipe: -1 } },
    //     { new: true }
    //   );
    //   res.status(202).json({ message: `Deleted Successfully` });
    // } else {
    //   res.status(401).send("Not Authorized");
    // }
    const recipeId = req.params.id;
    const recipe = await PostRecipe.findByIdAndDelete(recipeId);
    res.status(202).json({ message: `Deleted Successfully` });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createRecipe = async (req, res) => {
  const currentEmail = req.user.email;
  const title = req.body.title;
  const difficulty = req.body.difficulty;
  const prep_time = req.body.prep_time;
  const ingredients = req.body.ingredients.split(",");
  const utensils = req.body.utensils.split(",");
  const steps = req.body.steps.split("->");
  const url = req.body.url;

  const newRecipe = new PostRecipe({
    title,
    difficulty,
    prep_time,
    ingredients,
    utensils,
    steps,
    image_url: url,
  });

  try {
    await newRecipe.save();
    const savedRecipe = await PostRecipe.findOne({ title });
    const recipeId = savedRecipe._id.toString();
    const recUpdate = await User.findOneAndUpdate(
      { email: currentEmail },
      {
        $inc: { myrecipe: 1 },
        myrecipe_id: recipeId,
      }
    );
    res.status(201).json(savedRecipe);
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
  const { recipeId } = req.body;
  if (recipeId) {
    const addFav = await User.findOneAndUpdate(
      { email: currentEmail },
      {
        $inc: { favourites: 1 },
        fav_id: recipeId,
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
