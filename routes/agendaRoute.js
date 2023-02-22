import express from 'express'
const router=express.Router()
import { postAgenda,updateAgenda,deleteAgenda,getAgenda,getOneAgenda } from '../controller/agendaController.js'

router.route('/').post(postAgenda).get(getAgenda)
router.route('/edit/:agendaId').patch(updateAgenda).delete(deleteAgenda)
router.route('/get/:agendaId').get(getOneAgenda)

export default router