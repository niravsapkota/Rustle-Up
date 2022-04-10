import express from "express";
import { getRecipe, createRecipe } from "../controllers/recipe.js";
import { getReview, createReview } from "../controllers/review.js";


const router = express.Router();

router.get("/get", getRecipe);
router.post("/create", createRecipe);

router.get('/',getReview);
router.post('/',createReview);

export default router;
