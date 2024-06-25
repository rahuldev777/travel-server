const mongoose=require("mongoose")
const connectionString=process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log("Database connected sucessfully")
}).catch((err)=>{
    console.log("Error in connecting to database",err)
})