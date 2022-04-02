import express from "express";

import {getRecipes} from "../controllers/recipe_post.js";

const router=express.Router();

//http://localhost:5000/recipe_post

router.get('/', getRecipes);

export default router;