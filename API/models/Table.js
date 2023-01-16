import mongoose from 'mongoose';



var tableSchema = new mongoose.Schema({

FullName:{
    type: String
},
capacity:{
    type:Number
},
isavailable:{
    type:Boolean
},
})

export default mongoose.model("Table", tableSchema)


