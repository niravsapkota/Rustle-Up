import express from "express";
import {
  getRecipe,
  createRecipe,
  editRecipe,
  deleteRecipe,
  addToFav,
  deletefromFav,
} from "../controllers/recipe.js";
import {
  getReview,
  createReview,
  deleteReview,
} from "../controllers/review.js";
import { signin, getMe } from "../controllers/auth.js";
import authenticate from "../middleware/auth.js";
import store from "../middleware/multer.js";

const router = express.Router();

router.get("/get/:id", getRecipe);
router.post("/create", authenticate, createRecipe);
router.patch("/edit/:id", authenticate, editRecipe);
router.delete("/delete/:id", authenticate, deleteRecipe);

router.get("/get-review/:id", getReview);
router.post("/create-review", createReview);
router.delete("/delete-rev/:id", deleteReview);

router.post("/addtofav", authenticate, addToFav);
router.post("/delfromfav", authenticate, deletefromFav);

export default router;
