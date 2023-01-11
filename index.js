import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
dotenv.config();
mongoose.set('strictQuery', false);




app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public'));

app.get('/' , function(req,res){
  res.sendFile('index.html');
  });

app.post('/submit-booking-data', function(req,res){
  var name =req.body.FullName + ' ' + req.body.PhoneNumber;
  res.send(name +' '+'submitted successfully');
})

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