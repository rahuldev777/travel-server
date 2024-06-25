const mongoose=require("mongoose")




const bookingSchema=new mongoose.Schema({

    Name:{
        type:String,
        required:true

    },
    Email:{
        type:String,
        required:true
    },
    NumberofGuest:{
        type:String,
        required:true
    },
    CheckIn:{
        type:Date,
        required:true
    },
    CheckOut:{
        type:Date,
        required:true
    },
    PlaceId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
       ref:"Location" 
    },
    totalPrice:{
        type:String,
        required:true
    },
    Phone:{
      type:String,
      required:true
    },
    UserId:{
        type:String,
        required:true
    }

})

const Booking=mongoose.model("Booking",bookingSchema)
module.exports=Booking