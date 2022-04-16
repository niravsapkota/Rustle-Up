import ReviewDetails from "../models/review.js";
import Jwt from "jsonwebtoken"; 

//
  export const createReview = async (req, res) => {
    const {review} = req.body;
  
    try {
           const vari = ReviewDetails.create({
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
      const Review = await ReviewDetails.find();
  
      res.status(200).json(Review);
    }
    catch (error) {
      res.status(404).json({ message: error.message });
    }
};