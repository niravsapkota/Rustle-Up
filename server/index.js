import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import recipeRoutes from "./routes/recipe.js";
import authRoutes from "./routes/auth.js";
import protectedRoutes from "./routes/protected.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use("/recipe", recipeRoutes);
app.use("/auth", authRoutes);
app.use("/", protectedRoutes);

const CONNECTION_URL =
  "mongodb+srv://admin:admin@cluster0.4qhg3.mongodb.net/rustleup?retryWrites=true&w=majority";

// const CONNECTION_URL = process.env.MONGO_URI || 'mongodb://localhost:27017/rustleup';

const PORT = 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))
  )
  .catch((error) => console.log(`The Error is : ${error.message}`));
