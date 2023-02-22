import mongoose from "mongoose";
const Schema = mongoose.Schema


const AgendaSchema = new Schema({
    date: {
        type: String,
        trim: true
    },
    file:{
        type:String,
        trim: true
    }
})

export default mongoose.model('Agenda',AgendaSchema)