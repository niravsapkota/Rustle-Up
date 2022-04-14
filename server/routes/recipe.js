import express from "express";
import { getRecipe, createRecipe } from "../controllers/recipe.js";

const router = express.Router();

router.get("/get", getRecipe);
router.post("/create", createRecipe);

export default router;
