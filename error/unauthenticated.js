import { StatusCodes } from 'http-status-codes'
import CostumApiError from './costomApiError.js'

class unauthenticate extends CostumApiError{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

export default unauthenticate