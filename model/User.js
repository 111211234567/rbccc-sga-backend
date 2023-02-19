import mongoose from "mongoose";
const Schema = mongoose.Schema
import validator from "validator";
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
    name:{
        type:String,
        unique: [true, 'please provide name'],
        required:true,
        trim:true,
        maxlength:20
    },
    email:{
        type:String,
        unique: [true, 'please provide email'],
        required:true,
        trim:true,
        validate: {
            validator: validator.isEmail,
            message: 'please provide your rbc email'
        }
    },
    password:{
        type: String,
        required: [true, 'please provide your passwprd'],
        trim: true,
        select: false,
        minlength: 5,
        maxlength: 20
    },
    SgaOffcier:{
        type:Boolean,
        default:false
    },
    AdminRole:{
        type:String,
        trim:true,
        default:"rbc student"
    },
    headPhoto:{
        type:Schema.Types.ObjectId,
        ref:"Image"
    }

})

UserSchema.pre('save',async function(){
    if (!this.isModified('password')) return
    const saltPassword = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, saltPassword)
})

UserSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

export default mongoose.model('User', UserSchema)