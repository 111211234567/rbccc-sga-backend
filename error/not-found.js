import { StatusCodes } from 'http-status-codes'
import CostumApiError from './costomApiError.js'

class notFoundError extends CostumApiError{
    constructor(message){
        super(message)
        this.statusCode=StatusCodes.NOT_FOUND
    }
}

export default notFoundError