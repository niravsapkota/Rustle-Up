import express from "express";
import { getRecipe, createRecipe } from "../controllers/recipe.js";
import { getReview, createReview } from "../controllers/review.js";
import {signin,getMe} from "../controllers/auth.js"
import authenticate from "../middleware/auth.js";
import store from "../middleware/multer.js"

const router = express.Router();

router.get("/get", getRecipe);
router.post("/create", store.single("image") ,createRecipe);
router.get('/',getReview);
router.post('/',createReview);

export default router;
