import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import BookingRoute from "./API/routes/BookingRoutes.js";
import availableroute from "./API/routes/AvailableRoute.js";
import { Server, Socket } from "socket.io";
import { createServer } from "http";
const app = express();
const server = createServer(app);
const io = new Server(server);
var PORT = process.env.PORT || 5500;

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
});




//middlewares
app.use(express.json())

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use("/Booking", BookingRoute);
app.use("/Available", availableroute);


app.get('/' , function(req,res,next){
  res.sendFile('index.html');
  });

  io.on("connection", function(socket){
  socket.on("newuser",function(username){
   io.sockets.emit("update", username + " Joined the chat");
  });
  socket.on("exituser",function(username){
    socket.broadcast.emit("update",username + "left the chat");
  });
  socket.on("chat",function(message){
    socket.broadcast.emit("chat", message);
  });
  console.log("new client")
});

 server.listen(PORT  , () =>{
    connect();
    console.log("Connected to backend.");
});