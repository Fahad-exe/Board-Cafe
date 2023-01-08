import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


mongoose.set('strictQuery', false);

const app = express();
dotenv.config();


app.use(express.static('public'))

app.get('/',(_req,res)=>{
  res.render('index.html');
  });
app.listen(5500,'127.0.0.1')


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