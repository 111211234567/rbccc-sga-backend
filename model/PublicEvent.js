import mongoose from "mongoose";
const Schema=mongoose.Schema

const PublicEventSchema= new Schema({
    title:{
        type:String,
        trim:true
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    description:{
        type:String,
        trim:true
    },
    location:{
        type:String,
        trim:true
    },
    cost:{
        type:String,
        trim:true
    },
    date:{
        type:Schema.Types.ObjectId,
        ref:'Event'
    }
})

export default mongoose.model('PublicEvent',PublicEventSchema)