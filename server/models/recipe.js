import mongoose from "mongoose";
// import multer from "multer";
// import fs from "fs";
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  viewsCount: String,
  user: String,
  difficulty: String,
  prep_time: String,
  ingredients: Array,
  utensils: Array,
  steps: Array,
  image_url: String,
  tags: Array,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const PostRecipe = mongoose.model("PostRecipe", recipeSchema);

export default PostRecipe; //Default ES6 export
