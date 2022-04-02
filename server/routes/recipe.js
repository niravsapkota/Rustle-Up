import express from "express";
import { getRecipe, createRecipe } from "../controllers/recipe.js";

const router = express.Router();

router.get("/", getRecipe);
router.post("/", createRecipe);

export default router;
