import mongoose from "mongoose";

const recipeSchema = mongoose.Schema(
    {
        title : String,
        author : String,
        preptime : Number,
        difficulty : {
            type : Number,
            default : 0
        },
        rating : {
            type : Number,
            default : 0
        }
    }
);

const recipeSchema2 = mongoose.Schema(
    {
        ingredients : [String],
        utensils : [String],
        procedure : [String]
    }
);

const RecipeMessage = mongoose.model('recipeMessage',recipeSchema);
export default RecipeMessage;