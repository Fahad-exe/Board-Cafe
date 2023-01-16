
import mongoose from 'mongoose';


var bookingSchema = new mongoose.Schema({

FullName:{
    type: String
},
PhoneNumber:{
    type:Number
},
Hours:{
    type:String
},
PeopleCount:{
    type:Number
}
})

export default mongoose.model("Booking", bookingSchema)
