import express from 'express'
import { postNews,getnews,deleteNews,editeNews,getOneNews } from '../controller/newsController.js'

const router=express.Router()

router.route('/').post(postNews).get(getnews)
router.route('/edite/:newsId').delete(deleteNews).patch(editeNews).get(getOneNews)

export default router