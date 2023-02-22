import mongoose from "mongoose";
const Schema = mongoose.Schema

const FileSchema=new Schema({
    base64:{
        type:String,
        trim:true
    }
})

export default mongoose.model("File",FileSchema)