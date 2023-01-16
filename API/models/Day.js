import mongoose from 'mongoose';
import Table from './Table.js';



var daySchema = new mongoose.Schema({

date:{
    type:Date
},


})

export default mongoose.model("day", daySchema)

