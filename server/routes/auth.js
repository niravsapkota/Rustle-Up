import express from "express";
import {
  login,
  signup,
  getMe,
  logout,
  deleteProfile,
  changePassword,
} from "../controllers/auth.js";
import authenticate from "../middleware/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/logout", logout);
router.get("/me", authenticate, getMe);
router.get("/delete-profile", authenticate, deleteProfile);
router.post("/change-password", authenticate, changePassword);

export default router;
