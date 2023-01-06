import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.listen(9000, () =>{
    console.log("Connected to backend.")
})