import ReviewDetails from "../models/review.js";
import Jwt from "jsonwebtoken"; 

/*Review*/
export const getReview = async (req, res) => {
    try {
      const Review = await ReviewDetails.find();
  
      res.status(200).json(Review);
    }
    catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  export const createReview = async (req, res) => {
    const Review = req.body;
    const newReview = new ReviewDetails(Review);
  
    try {
      await newReview.save();
      res.status(201).json(newReview);
    }
    catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
  
  