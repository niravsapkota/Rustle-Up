import express from "express";
import authenticate from "../middleware/auth.js";
import { getMe } from "../controllers/auth.js";

const router = express.Router();

router.get("/profile", authenticate, getMe);
router.get("/create-recipe", authenticate, getMe);

export default router;
