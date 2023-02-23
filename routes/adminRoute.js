import express from 'express'
const router = express.Router()

import { getAllUser, updateOneUser, deleteUser, findUserByName, findSgaOffcier } from '../controller/adminController.js'

router.route('/').get(getAllUser)
router.route('/edit/:userId').patch(updateOneUser).delete(deleteUser)
router.route('/get/:name').get(findUserByName)
router.route('/sga').get(findSgaOffcier)

export default router