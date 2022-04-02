import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json(
    {limit:"50mb", extended:true}
));

app.use(bodyParser.urlencoded(
    {limit:"50mb", extended:true}
));

app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://admin:admin@cluster0.4qhg3.mongodb.net/rustleup?retryWrites=true&w=majority";
const PORT=process.env.PORT || 5000;
 
mongoose.connect(CONNECTION_URL)
    .then(
        ()=>app.listen(
            PORT,
        ()=>console.log(`Server Running on port : ${PORT}`)
        ))
    .catch((error)=>console.log(error.message));

// mongoose.set("useFindAndModify",false);

