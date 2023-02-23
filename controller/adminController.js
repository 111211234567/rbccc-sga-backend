import User from "../model/User.js";
import { StatusCodes } from 'http-status-codes'
const getAllUser = async (req, res) => {
    const users = await User.find({}, { name: 1, email: 1, SgaOffcier: 1, AdminRole: 1 })
    res.status(StatusCodes.OK).json({ users })
}
const updateOneUser = async (req, res) => {
    const { userId } = req.params
    const { SgaOffcier, AdminRole } = req.body
    const user = await User.findById(userId)
    user.SgaOffcier=SgaOffcier
    user.AdminRole=AdminRole
    await user.save()
    res.status(StatusCodes.OK).json({ user })
}

const deleteUser=async (req,res)=>{
    const { userId } = req.params
    await User.findByIdAndDelete(userId)
    res.status(StatusCodes.OK)
}

const findUserByName=async (req,res)=>{
    const {name}=req.params
    const users=await User.find({name:{$regex:`${name}`}})
    res.status(StatusCodes.OK).json({ users })
}

const findSgaOffcier=async(req,res)=>{
    const users=await User.find({SgaOffcier:true})
    res.status(StatusCodes.OK).json({ users })
}

export {getAllUser,updateOneUser,deleteUser,findUserByName,findSgaOffcier}