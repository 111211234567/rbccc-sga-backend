import mongoose from "mongoose";
const Schema=mongoose.Schema

const TextSchema=new Schema({
    text:{
        type:String,
        trim:true
    }
})

export default mongoose.model('Text',TextSchema)