import ReviewDetails from "../models/review.js";
import Jwt from "jsonwebtoken"; 

//
  export const createReview = async (req, res) => {
    const {review} = req.body;
  
    try {
           const reviewBody = ReviewDetails.create({
        review,
      });

      res.status(201).send('Success');
    }
    catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
  
export const getReview = async (req, res) => {
    try {
      const Review = await ReviewDetails.findById(req.params.id);
  
      res.status(200).json(Review);
    }
    catch (error) {
      res.status(404).json({ message: error.message });
    }
};

export const deleteReview = async (req,res) => {

  try {
    const review = await ReviewDetails.findByIdAndDelete(req.params.id);
    res.status(202).json({message: `Deleted Successfully`});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }

}