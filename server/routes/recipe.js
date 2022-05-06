import express from "express";
import {
  getAll,
  getRecipe,
  createRecipe,
  editRecipe,
  deleteRecipe,
  addToFav,
  deletefromFav,
} from "../controllers/recipe.js";
import authenticate from "../middleware/auth.js";

const router = express.Router();

router.get("/trending", getAll);
router.get("/get/:id", getRecipe);
router.post("/create", authenticate, createRecipe);
router.patch("/edit/:id", authenticate, editRecipe);
router.delete("/delete/:id", authenticate, deleteRecipe);

router.post("/addtofav/:id", authenticate, addToFav);
router.post("/delfromfav", authenticate, deletefromFav);

export default router;
