import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({

FullName:{
    type: String,
    required:true
},
PhoneNumber:{
    type:Number,
    required:true
},
PeopleNumber:{
    type:Number,
    min:1,
    max:6,
    required:true
}
})

export default mongoose.model("Booking", bookingSchema)