import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  title: String,
  prep_time: String,
  about: String,
  difficulty: String,
  description: String,
  user: String,
  view_count: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
});

const PostRecipe = mongoose.model("PostRecipe", recipeSchema);
export default PostRecipe;
