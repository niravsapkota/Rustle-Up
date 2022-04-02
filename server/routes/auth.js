import bodyParser from "body-parser";
import express from "express";
import { signin, signup } from "../controllers/auth.js";

const router = express.Router();
router.use(bodyParser.json());

router.post("/login", signin);
router.post("/signup", signup);

export default router;
