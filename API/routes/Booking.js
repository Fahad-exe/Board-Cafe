import  express  from "express";
import booking from "../models/booking.js";

const router =  express.Router();

router.get("/",(req,res, next)=>{
res.status(200).send("allgood");
})

router.post('/Booking',async (req,res)=>{

   const newbooking = new booking(req.params)

   try{
    const savedbooking = await newbooking.save()
    res.status(200).json(savedbooking)
   }catch(err){
    res.status(500).json(err)
   }
  })
  
  export default router