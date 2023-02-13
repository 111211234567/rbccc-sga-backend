import User from "../model/User.js";
import BadRequest from "../error/bad-request.js";
import { StatusCodes } from 'http-status-codes'

const register = async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        throw new BadRequest('please provide all value')
    }
    const already = await User.findOne({ name })
    if (already) {
        throw new BadRequest('user already exist')
    }
    const user = await User.create({ name, email, password })

    res.status(StatusCodes.CREATED).json({
        user: {
            name: user.name,
            email: user.email,
            SgaOffcier: user.SgaOffcier,
            AdminRole: user.AdminRole
        },
    });
}

const login = async (req, res) => {
    const { name, password } = req.body
    if (!name || !password) {
        throw new BadRequest("please input all value")
    }
    const user = await User.findOne({ name }).select('+password')
    if (!user) {
        throw new BadRequest("user not found")
    }
    const passwordCorrect = await user.comparePassword(password)
    if (!passwordCorrect) {
        throw new BadRequest("olease check username or password")
    }
    res.status(StatusCodes.OK).json({
        user: {
            name: user.name,
            email: user.email,
            SgaOffcier: user.SgaOffcier,
            AdminRole: user.AdminRole
        },
    });
}


export { register, login }