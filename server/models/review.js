import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    recipe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PosrtRecipe",
    },
  },
  { timestamps: true }
);

const ReviewDetails = mongoose.model("ReviewDetails", reviewSchema);
export default ReviewDetails;
