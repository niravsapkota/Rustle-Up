import express from "express";
import {
  getAll,
  getRecipe,
  getMyRecipe,
  getFavRecipe,
  createRecipe,
  editRecipe,
  deleteRecipe,
  addToFav,
  deletefromFav,
  checkFav,
  getRecipeBySearch,
} from "../controllers/recipe.js";
import authenticate from "../middleware/auth.js";

const router = express.Router();

router.get("/trending", getAll);
router.get("/get/:id", getRecipe);
router.get("/getmyrecipe", authenticate, getMyRecipe);
router.get("/getmyfav", authenticate, getFavRecipe);
router.post("/create", authenticate, createRecipe);
router.patch("/edit/:id", authenticate, editRecipe);
router.delete("/delete/:id", authenticate, deleteRecipe);
router.post("/addtofav/:id", authenticate, addToFav);
router.post("/delfromfav/:id", authenticate, deletefromFav);
router.get("/search", getRecipeBySearch);

router.get("/checkfav/:id", authenticate, checkFav);

export default router;
