import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'


import connectDB from './db.js'


import path from 'path'

const app = express()

app.use(express.json())
dotenv.config()



const port = process.env.PORT || 5000

app.use(cors())



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