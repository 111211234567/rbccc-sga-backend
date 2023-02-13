import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import 'express-async-errors';

import connectDB from './db.js'
import errorHandlerMiddleware from './error/error-handler.js'
import authRoute from './routes/authRoute.js';

import path from 'path'

const app = express()

app.use(express.json())
dotenv.config()

app.use('/api/v1/auth',authRoute)



const port = process.env.PORT || 5000

app.use(cors())
app.use(errorHandlerMiddleware)


const mongdb= `${process.env.MONGO_URL}`
const start=async ()=>{
    try{
        try{
            await connectDB(mongdb)
            console.log('connect to DB')
        }catch(error){
            console.log(`unable to connectto DB, error:${error}`)
        }
        
        app.listen(port,()=>{
            console.log(`server runing at ${port}` )
        }) 
    }catch(error){
console.log(error)
    }
}
start()