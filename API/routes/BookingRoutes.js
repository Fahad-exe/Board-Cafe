import  express  from "express";
import booking from "../models/booking.js";



const router =  express.Router();



router.post("/Booking",async (req,res,next)=>{
   const newBooking = new booking(req.body)
   try{
      const savedbooking = await newBooking.save()
      res.status(200).json(savedbooking);
      res.send(
         `FullName:${req.body.FullName}.`,
         `PhoneNumber:${req.body.PhoneNumber}.`,
         `Hours:${req.body.Hours}.`,
         `PeopleCount:${req.body.PeopleCount}.`
      );
      res.end();
      next();
   }catch(err){
      res.status(500).json(err)
   }
});

router.put("/Booking/:id",async (req,res)=>{
   try{
      const updatedbooking = await booking.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
      res.status(200).json(updatedbooking)
   }catch(err){
      res.status(500).json(err)
   }
});

router.delete("/Booking/:id",async (req,res)=>{
   try{
        await booking.findByIdAndDelete(req.params.id)
      res.status(200).json("Booking has been deleted!")
   }catch(err){
      res.status(500).json(err)
   }
});
router.get("/Booking/:id",async (req,res)=>{
   try{
        const Booking = await booking.findById(req.params.id)
      res.status(200).json(Booking)
   }catch(err){
      res.status(500).json(err)
   }
});

router.get("/Booking",async (req,res)=>{
   
   try{
        const Bookings = await booking.find()
      res.status(200).json(Bookings)
   }catch(err){
      res.status(500).json(err)
   }  
});


  
export default router