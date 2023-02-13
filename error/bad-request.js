import { StatusCodes } from 'http-status-codes'
import CostumApiError from './costomApiError.js'

class BadRequest extends CostumApiError {
    constructor(message){
        super(message)
        this.statusCode=StatusCodes.BAD_REQUEST
    }
}

export default BadRequest