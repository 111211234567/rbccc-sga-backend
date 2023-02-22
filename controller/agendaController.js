import Text from "../model/Text.js";
import Agenda from "../model/Agenda.js";
import File from "../model/File.js";
import { StatusCodes } from 'http-status-codes'
const postAgenda = async (req, res) => {
    try {
        const { date, file } = req.body
        const agenda = await Agenda.create({ date, file })
        res.status(StatusCodes.CREATED).json({ agenda })
    } catch (error) {
        res.json({ error })
        console.log(error)
    }
}
const getAgenda = async (req, res) => {
    const ageandas = await Agenda.find({}, { date: 1, _id: 1 })
    res.status(StatusCodes.OK).json({ ageandas })
}

const getOneAgenda = async (req, res) => {
    const { agendaId } = req.params
    const agenda = await Agenda.findById(agendaId)
    res.status(StatusCodes.OK).json({ agenda })
}

const updateAgenda = async (req, res) => {
    const { date, file } = req.body
    const { agendaId } = req.params
    const agenda = await Agenda.findById(agendaId)
    agenda.file = file
    agenda.date = date
    await agenda.save()
    res.status(StatusCodes.OK).json({ agenda })
}

const deleteAgenda = async (req, res) => {
    const { agendaId } = req.params
    await Agenda.findByIdAndDelete(agendaId)
    res.status(StatusCodes.OK)
}


export { postAgenda, updateAgenda, deleteAgenda, getAgenda,getOneAgenda }