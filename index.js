import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

mongoose.set('strictQuery', false);
const path =require('path');
const app = express();
dotenv.config();

app.use(express.static(path.join(__dirname, 'Public')))

app.get('/', (req,res)=>{
  res.render('Index.html')
})
app.listen(process.env.PORT, () =>{console.log('Server listening on port ${process.env.PORT}')})
const connect = async () =>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb")
  } catch (error) {
    throw(error);
  }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
})



app.listen(5500, () =>{
    connect()
    console.log("Connected to backend.")
})