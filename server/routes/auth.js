import express from "express";
import { signin, signup, getMe, logout } from "../controllers/auth.js";
import authenticate from "../middleware/auth.js";

const router = express.Router();

router.post("/login", signin);
router.post("/signup", signup);
router.get("/logout", logout);
router.get("/me", authenticate, getMe);

export default router;
