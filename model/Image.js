import mongoose from "mongoose";

const Schema= mongoose.Schema

const ImageSchema=new Schema({
    img:{
        type:String,
        trim:true
    }
})

export default mongoose.model('Image',ImageSchema)