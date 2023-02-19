import User from "../model/User.js";
import Image from "../model/Image.js";
import { StatusCodes } from 'http-status-codes'

const updateUser = async (req, res) => {
    const { userId } = req.params
    const { image, name, email } = req.body
    const user = await User.findById(userId).populate({
        path: 'headPhoto'
    })
    const newsImage = await Image.create({ img: image })
    if (user.headPhoto) {
        await Image.findByIdAndDelete(user.headPhoto._id)
    }
    user.name = name
    user.email = email
    user.headPhoto = newsImage
    await user.save()
    res.status(StatusCodes.OK).json({ user })
}

export { updateUser }