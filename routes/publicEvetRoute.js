import express from 'express'
const router=express.Router()

import { getAllPublicEvents, getOnePublicEvents, postPublicEvent, deletePublicEvent } from '../controller/PublicEventController.js'

router.route('/').post(postPublicEvent).get(getAllPublicEvents)
router.route('/get/:publicEventId').get(getOnePublicEvents)
router.route('/edit/:publicEventId').delete(deletePublicEvent)

export default router