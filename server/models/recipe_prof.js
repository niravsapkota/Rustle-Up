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
        },
        view_count: {
            type: Number,
            default: 0,
        },
        created_at: {
            type: Date,
            default: new Date(),
        }
    }
);

const RecipeProfile = mongoose.model('recipeProfile',recipeSchema);
export default RecipeProfile;