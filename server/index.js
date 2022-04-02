import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import recipeRoute  from "./routes/recipe_post.js";//error w/o .js

const app = express();

app.use('/recipe_post',recipeRoute); // added /recipe_post to routes in other file

app.use(bodyParser.json(
    {limit:"50mb", extended:true}
));

app.use(bodyParser.urlencoded(
    {limit:"50mb", extended:true}
));

app.use(cors());

const CONNECTION_URL = "mongodb+srv://admin:admin@cluster0.4qhg3.mongodb.net/rustleup?retryWrites=true&w=majority";

const PORT=process.env.PORT || 5000;
 
mongoose.connect(CONNECTION_URL)
    .then(
        ()=>app.listen(
            PORT,
        ()=>console.log(`Server Running on port : ${PORT}`)
        ))
    .catch((error)=>console.log(error.message));

// mongoose.set("useFindAndModify",false); not exist in mongoose 6

