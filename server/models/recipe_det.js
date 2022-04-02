import mongoose from "mongoose";

const recipeDetailSchema = mongoose.Schema(
  {
    ingredients : [String],
    utensils : [String],
    procedure : [String]
  }
);

const RecipeDetails = mongoose.model("RecipeDetails", recipeDetailSchema);
export default RecipeDetails;
