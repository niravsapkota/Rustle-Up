import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import recipeRoutes from "./routes/recipe.js";
import authRoutes from "./routes/auth.js";

const app = express();

app.use("/", recipeRoutes);
app.use("/auth", authRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://admin:admin@cluster0.4qhg3.mongodb.net/rustleup?retryWrites=true&w=majority";

const PORT = 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
