import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Bookingroute from "./API/routes/Booking.js";
import usersroute from "./API/routes/users.js";

const app = express();
dotenv.config();

mongoose.set('strictQuery', false);


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


//middlewares
app.use(express.json())

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use("API/Booking", Bookingroute);
app.use("/users", usersroute);

app.get('/' , function(req,res,next){
  res.sendFile('index.html');
  });