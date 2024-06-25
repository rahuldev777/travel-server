//load .env file content into the process.env by default

require("dotenv").config()
const express=require("express")
const cors=require("cors")
const TServer=express()
const router=require("../Server/Router/router")
require("./DB/connection")
const Razorpay=require("razorpay")


//data sharing

TServer.use(cors())

//parse json type http request then  

TServer.use(express.json())

TServer.use(router)

TServer.use("/uploads",express.static("./uploads"))



//server port creation

const PORT=3000 || process.env.PORT

TServer.listen(PORT,()=>{
    console.log(`server started listening Port  ${PORT}`)
})