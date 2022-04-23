import mongoose from "mongoose";
import PostRecipe from "../models/recipe.js";
import RecipeDetails from "../models/recipe.js";
import ReviewDetails from "../models/review.js";
import storage from "../middleware/multer.js";
import multer from "multer";
import { readdirSync } from "fs";

export const getAll = async (req, res) => {
  let { page, size } = req.query;
  if (!page) {
    page = 1
  }
  if (!size) {
    size = 3
  }
  const limit = parseInt(size);
  const startIndex = (page-1) * limit;
  const endIndex = page * limit;

  try {
    
    const recipes = await PostRecipe.find().sort({ viewsCount: -1, createdAt: -1 }).limit(limit).skip(startIndex);
    res.status(200).json(recipes);

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getRecipe = async (req, res) => {
  try {
    let recipe = await PostRecipe.findById(req.params.id);
    const viewsCount = ++recipe.viewsCount;
    recipe = await PostRecipe.findByIdAndUpdate(req.params.id, { viewsCount })
    res.status(200).json(recipe);

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteRecipe = async (req, res) => {

  try {
    const recipe = await PostRecipe.findByIdAndDelete(req.params.id);
    res.status(202).json({ message: `Deleted Successfully` });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }

}

export const createRecipe = async (req, res) => {

  let upload = multer({ storage: storage }).single('file');
  upload(req, res, function (err) {

    console.log(req.file);

  })

  const title = req.body.title;
  const difficulty = req.body.difficulty;
  const prep_time = req.body.prep_time;
  const ingredients = req.body.ingredients.split(',');
  const utensils = req.body.utensils.split(',');
  const steps = req.body.steps.split('->');


  // const newRecipe = new PostRecipe(
  //   {
  //     title,
  //     difficulty,
  //     prep_time,
  //     ingredients,
  //     utensils,
  //     steps,
  //     image
  //   });

  try {
    //await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
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

export const editRecipe = async (req, res) => {

  const id = req.params.id;
  const title = req.body.title;
  const difficulty = req.body.difficulty;
  const prep_time = req.body.prep_time;
  const ingredients = req.body.ingredients.split(',');
  const utensils = req.body.utensils.split(',');
  const steps = req.body.steps.split('->');

  try {
    const updatedRecipe = await PostRecipe.findByIdAndUpdate(id, {
      title, difficulty, prep_time, ingredients, utensils, steps
    })
    res.json(updatedRecipe);
  }
  catch (error) {
    console.log(error);
  }
}