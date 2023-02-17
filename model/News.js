import mongoose from "mongoose";
const Schema = mongoose.Schema

const NewsSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        minlength: [20, "please provide more than 10 words"]
    },
    img: {
        type: String,
        trim: true
    },
    date: {
        type: String,
        trim: true
    }
})

export default mongoose.model('News', NewsSchema)