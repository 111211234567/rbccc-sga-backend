import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import 'express-async-errors';

import connectDB from './db.js'
import errorHandlerMiddleware from './error/error-handler.js'
import authRoute from './routes/authRoute.js';
import newsRoute from './routes/newsRoute.js'
import router from './controller/CalendarController.js'

import path from 'path'
import bodyParser from 'body-parser';



const app = express()

app.use(cors())
// app.use(express.json())
dotenv.config()
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb",  extended: true, parameterLimit: 1000000 }));


app.use('/api/v1/auth',authRoute)
app.use('/api/v1/news',newsRoute)
app.use("/api/calendar",router)


const port = process.env.PORT || 5000


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