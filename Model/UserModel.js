const mongoose=require("mongoose");



const userSchema =new mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
         unique:true,
        required:true
       
    },
    password:{
        type:String,
        required:true
    },
    profile:{
        type:String
    },
    bookinglist:{
        type:Array,
        default:[]
    },
    locationlist:{
        type:Array,
        default:[]
    },
     wishlist:{
        type:Array,
        default:[]
    }
    
    
})


const users = mongoose.model('users',userSchema)
module.exports=users