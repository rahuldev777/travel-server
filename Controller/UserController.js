const users= require("../Model/UserModel")
const jwt=require("jsonwebtoken")

//register 

exports.register=async(req,res)=>{

const{username,email,password}=req.body
console.log("inside register controller");

    try{
        const existingUser=await users.findOne({email})
        console.log(existingUser);

        if(existingUser){
            res.status(406).json("user already exist")

        }else{

            const newUser= new users({
                username,email,password,profile:""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }

    }catch(err){
        res.status(401).json(err)
    }
}
//login part

exports.login=async(req,res)=>{
    const{email,password}=req.body;
    console.log("inside login controller");
    try{
        const existingUser=await users.findOne({email,password});
        if(existingUser){

            const token=jwt.sign({userId:existingUser._id},process.env.JWT_SECRET)
            res.status(200).json({existingUser,token})

        }else{
      res.status(401).json("Invalid Email and Password")
        }

    }catch(err){
        res.status(401).json(err)
    }
}