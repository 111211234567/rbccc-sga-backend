import BadRequest from "../error/bad-request.js";
import { StatusCodes } from 'http-status-codes'
import User from "../model/User.js";
import News from "../model/News.js";

const getnews = async (req, res) => {
    const allNews = await News.find({}).populate({
        path:'author'
    })
    res.status(StatusCodes.OK).json({ news: allNews })
}

const postNews = async (req, res) => {
    const { userId, img, description, date,title } = req.body
    const uncreatedNews = {
        author: userId,
        description: description,
        img: img,
        date: date,
        title:title
    }
    const news = await News.create(uncreatedNews)
    await news.save()
    res.status(StatusCodes.CREATED).json({ news: news })
}

const deleteNews = async (req, res) => {
    const { newsId } = req.params
    await News.findByIdAndDelete(newsId)
    res.status(StatusCodes.OK)
}

const editeNews = async (req, res) => {
    const { newsId } = req.params
    const { img, description, date } = req.body
    const news = await News.findById(newsId)
    news.description=description
    news.img=img
    news.date=date
    news.title=title
    await news.save()
    res.status(StatusCodes.OK).json({ news: news })
}

const getOneNews=async (req,res)=>{
    const { newsId } = req.params
    const news=await News.findById(newsId)
    res.status(StatusCodes.OK).json({ news: news })
}



export { postNews, getnews, deleteNews,editeNews,getOneNews }