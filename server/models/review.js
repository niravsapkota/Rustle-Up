import mongoose from "mongoose";

const reviewSchema=new mongoose.Schema(
    {
        review : {
            type: String,
            required : true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'UserID'
        },
        recipe:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'RecipeID'
        }
    },
    {timestamps:true}
)

const ReviewDetails=mongoose.model('ReviewDetails',reviewSchema);
export default ReviewDetails;