import mongoose from "mongoose";

const EventSchema=mongoose.Schema({
    start:Date,
    end:Date,
    title:String
})

export default mongoose.model('Event', EventSchema)