import User from "../model/User.js";
import Event from "../model/Event.js";
import PublicEvent from "../model/PublicEvent.js";
import { StatusCodes } from 'http-status-codes'

const postPublicEvent = async (req, res) => {
    const { description, title, location, cost, start, end, userId } = req.body
    const event = Event({
        title,
        start,
        end
    });
    await event.save();
    const publicEvent = await PublicEvent.create({
        author: userId,
        description,
        title,
        location,
        cost,
        date: event._id
    })
    res.status(StatusCodes.CREATED).json({ publicEvent })
}

const getAllPublicEvents = async (req, res) => {
    const publicEvents = await PublicEvent.find({}).populate({
        path:'author'
    }).populate({
        path:'date'
    })
    res.status(StatusCodes.OK).json({ publicEvents })
}

const getOnePublicEvents = async (req, res) => {
    const { publicEventId } = req.params
    const publicEvent = await PublicEvent.findById(publicEventId).populate({
        path:'author'
    }).populate({
        path:'date'
    })
    res.status(StatusCodes.OK).json({ publicEvent })
}

const deletePublicEvent = async (req, res) => {
    const { publicEventId } = req.params
    const publicEvent = await PublicEvent.findById(publicEventId)
    await Event.findByIdAndDelete(publicEvent.date)
    await publicEvent.delete()
    res.status(StatusCodes.OK)
}

export { getAllPublicEvents, getOnePublicEvents, postPublicEvent, deletePublicEvent }