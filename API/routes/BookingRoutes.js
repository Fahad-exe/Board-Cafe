import  express  from "express";

import Day from "../models/Day.js";
import mongoose from "mongoose";
const router =  express.Router();

router.post("/",function(req,res, next){
   Day.find({date:req.body.date},(err,days)=>{
      if(!err){
         if(days.length > 0){
            let day = days[0];
            day.tables.foreach(table =>{
               if(table._id ==req.body.table){
                  table.reservation = new booking({
                     FullName: req.body.FullName,
                     PhoneNumber: req.body.PhoneNumber
                  });
                  table.isAvailable =false;
                  day.save(err =>{
                     if(err){
                        console.log(err);
                     } else{
                        console.log("Reserved");
                        res.status(200).send("Booked");
                     }
                  });
               }
            });
         } else {
            console.log("Day not Found");
         }
      }
   });
});


  
export default router