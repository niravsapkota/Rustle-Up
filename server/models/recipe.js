import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  title: {
    type:String,
    required:true
  },
  prep_time: String,
  about: String,
  difficulty: String,
  description: {
    type:String, 
    required:true
  },
  user_id: {
    type:Number,
    required:true
  },
  view_count: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
    default: new Date(),
    required:true,
  },
  words_count: {
    type:Number,
    default: 0,
    required:true,

  }
});

//Compiling a Model
const PostRecipe = mongoose.model("PostRecipe", recipeSchema);
export default PostRecipe; //Default ES6 export
