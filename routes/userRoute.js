import express from 'express'
import { updateUser } from '../controller/userController.js'
const router=express.Router()

router.route('/update/:userId').patch(updateUser)

export default router