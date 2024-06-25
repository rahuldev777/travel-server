const jwt = require("jsonwebtoken")

const jwtMiddleware=(req,res,next)=>{
    console.log("inside token verification");
    

    const token=req.headers["authorization"].split(" ")[1]
    try{
        if(token){
            const jwtResponse=jwt.verify(token,process.env.JWT_SECRET)
            req.payload=jwtResponse.userId

            next()
        }else{
            res.status(401).json("inavlid Token")
        }

    }catch(err){
        res.status(403).json("please login")
    }

}

module.exports=jwtMiddleware