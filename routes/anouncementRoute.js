import express from 'express'
import { getAnouncement,getOneAnouncement,deleteAnouncement,postAnouncement,editeAnouncemnt } from '../controller/anouncementController.js'

const router=express.Router()

router.route('/').post(postAnouncement).get(getAnouncement)

router.route('/edite/:AnouncementId').patch(editeAnouncemnt).delete(deleteAnouncement)

router.route('/get/:AnouncementId').get(getOneAnouncement)

export default router