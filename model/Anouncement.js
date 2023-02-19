import mongoose from "mongoose";
const Schema=mongoose.Schema

const AnouncementSchema=new Schema({
    author:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    title:{
        type:String,
        trim:true,
    },
    description:{
        type:String,
        trim:true
    },
    date:{
        type:String,
        trim:true
    }
})

export default mongoose.model("Anouncement",AnouncementSchema)