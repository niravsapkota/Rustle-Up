import express from "express";
import {
  getAll,
  getRecipe,
  createRecipe,
  editRecipe,
  deleteRecipe,
  addToFav,
  deletefromFav,
  makeRev,
  getRev,
} from "../controllers/recipe.js";
import {
  getReview,
  createReview,
  deleteReview,
} from "../controllers/review.js";
import authenticate from "../middleware/auth.js";

const router = express.Router();

router.get("/trending", getAll);
router.get("/get/:id", getRecipe);
router.post("/create", authenticate, createRecipe);
router.patch("/edit/:id", authenticate, editRecipe);
router.delete("/delete/:id", authenticate, deleteRecipe);

router.get("/getrev/:id", getRev );
router.post("/makerev/:id", authenticate ,makeRev );


router.get("/get-review/:id", getReview);
router.post("/create-review", authenticate, createReview);
router.delete("/delete-rev/:id", authenticate,deleteReview);

router.post("/addtofav", authenticate, addToFav);
router.post("/delfromfav", authenticate, deletefromFav);

export default router;
