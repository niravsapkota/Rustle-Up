import mongoose from "mongoose";

const reviewSchema=new mongoose.Schema(
    {
        review : {
            type: String,
            required : true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        recipe:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Recipe'
        },
        likes: [{
                type : mongoose.Schema.Types.ObjectId,
                ref: 'Like'
            }]
    },
    {timestamps:true}
)

const Review=mongoose.model('review',reviewSchema);
module.exports=Review;