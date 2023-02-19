import BadRequest from "../error/bad-request.js";
import { StatusCodes } from 'http-status-codes'
import Anouncement from "../model/Anouncement.js";
import User from "../model/User.js";


const postAnouncement = async (req, res) => {
    const { userId, title, description, date } = req.body
    const data = {
        author: userId,
        title: title,
        description: description,
        date: date
    }
    const newAnouncement = await Anouncement.create(data)
    await newAnouncement.save()
    res.status(StatusCodes.CREATED).json({ newAnouncement })
}

const getAnouncement = async (req, res) => {
    const allAnouncement = await Anouncement.find({}).populate({
        path:'author',
        populate:{
            path:'headPhoto'
        }
    })
    res.status(StatusCodes.CREATED).json({ Anouncement: allAnouncement })
}
const getOneAnouncement = async (req, res) => {
    const { AnouncementId } = req.params
    const anouncement= await Anouncement.findById(AnouncementId).populate({
        path:'author',
        populate:{
            path:'headPhoto'
        }
    })
    res.status(StatusCodes.OK).json({ anouncement:anouncement })
}

const deleteAnouncement = async (req, res) => {
    const { AnouncementId } = req.params
    await Anouncement.findByIdAndDelete(AnouncementId)
    res.status(StatusCodes.OK)
}

const editeAnouncemnt = async (req, res) => {
    const { AnouncementId } = req.params
    const { title, description, date } = req.body
    const Anouncement = await Anouncement.findById(AnouncementId)
    Anouncement.title = title
    Anouncement.description = description
    Anouncement.date = date
    await Anouncement.save()
    res.status(StatusCodes.OK).json({ Anouncement: Anouncement })
}

export {getAnouncement,postAnouncement,deleteAnouncement,getOneAnouncement,editeAnouncemnt}