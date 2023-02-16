import mongoose from "mongoose";

const connectDB=(url)=>{
  return  mongoose.connect(url,{
    useUnifiedTopology:true,
    useNewUrlParser:true
},()=> console.log('connected'))
}

export default connectDB