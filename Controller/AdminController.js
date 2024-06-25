const admin=require("../Model/AdminModel")
const users=require("../Model/UserModel")
const Location=require("../Model/LocationModel")
const Booking=require("../Model/BookingModel")
const jwt=require("jsonwebtoken")



exports.AdminRegister=async(req,res)=>{

    const{email,password}=req.body
    try{
        const existingAdmin=await admin.findOne({email})
        if(existingAdmin){

            res.status(406).json("this email is already registered please try another email")
        }else{
            const newAdmin=new admin({
                email,
                password
            })
           await newAdmin.save()
           res.status(200).json(newAdmin)
        }
             
    }catch(err){
        res.status(400).json(err)
    }
}





exports.AdminLogin=async(req,res)=>{
    
    const{email,password}=req.body
    console.log("inside admin Controller");
    try{
        const existingAdmin=await admin.findOne({email,password})
        if(existingAdmin){
            const token=jwt.sign({adminId:existingAdmin._id},process.env.JWT_SECRET)
            res.status(200).json({existingAdmin,token})
        }else{
            res.status(401).json("Invalid Email and Password")
        }

    }catch(err){
        res.status(401).json(err)
    }
}

exports.fetchAllUsers=async(req,res)=>{
    try{
        const AllUsers=await users.find()
        res.status(200).json(AllUsers)
    }catch(err){
        res.status(400).json(err)
    }
    
}

exports.dropSingleUser=async(req,res)=>{
    console.log("inside of dropsingleuser");

    const{id}=req.params;
 
    try{
        const result=await users.findByIdAndDelete({_id:id})
      
            res.status(200).json(result)
      
    }catch(err){
           res.status(400).json(err)
    }
}

exports.AllPackages=async(req,res)=>{
    console.log("inside of Allpackages");
    try{
        const AllPackages=await Location.find()
        res.status(200).json(AllPackages)
        
    }catch(err){
        res.status(400).json(err)
    }
}

exports.AllBookings=async(req,res)=>{
    console.log("inside of AllBooking history")
    try{
        const Allpackages=await Booking.find().populate("PlaceId")
        res.status(200).json(Allpackages)

    }catch(err){

        res.status(400).json(err)

    }
}