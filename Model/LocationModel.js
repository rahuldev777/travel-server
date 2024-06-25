const mongoose=require("mongoose");



const locationSchema = new mongoose.Schema({


    title:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    addedphotos:{
       type:[String],
       required:true 
    },

    description:{
        type:String,
        required:true
    },
     
    type:{
        type:String,
        required:true
    },
    perks:{
        type:[String],
        required:true,
        
    },
    extrainfo:{
        type:String,
        required:true
    },
    checkin:{
        type:String,
        required:true
    },
    checkout:{
        type:String,
        required:true
    },
    maxguest:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }


})

const Location =mongoose.model("Location",locationSchema)
module.exports=Location