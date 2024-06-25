const Location=require("../Model/LocationModel")




exports.addLocation=async(req,res)=>{
    console.log("inside the location controller")
    const{title,address,description,type,perks,extrainfo,checkin,checkout,maxguest,price}=req.body
    const addedphotos=req.files.map(file=>file.filename)
    console.log(addedphotos);

    const userId=req.payload
    try{
        const existingLocation = await Location.findOne({address})
        if(existingLocation){

            res.status(406).json("Location already exist")

        }else{

            const newLocation=  new Location({
                title,address,addedphotos,description,type,perks,extrainfo,checkin,checkout,maxguest,price,userId
 
            })
            newLocation.save()
            res.status(200).json(newLocation)

        }
    }catch(err){
          res.status(401).json(err)
    }

    
}

exports.getUserLocation=async(req,res)=>{
    console.log("inside getUserLocation ");

    const userId=req.payload
    try{
        const UserLocation=await Location.find({userId})
        res.status(200).json(UserLocation)
    }catch(err){
        res.status(401).json(err)
    }
}

exports.editUserLocation=async(req,res)=>{
    console.log("inside the editUserLocation");
    const {id} =req.params;
    const finduser=await Location.find({_id:id});
    res.status(200).json(finduser)
}

exports.editSingleLocation=async(req,res)=>{
    console.log("inside the editSingleUserLoaction");
    const {id}=req.params
    console.log(id);
    const userId=req.payload
    const{title,address,addedphotos,description,type,perks,extrainfo,checkin,checkout,maxguest,price}=req.body
    try{
        const FindLocation = await Location.findOneAndUpdate({_id:id},{
            title,address,addedphotos,description,type,perks,extrainfo,checkin,checkout,maxguest,price,userId
        },{new:true})
 
         await FindLocation.save()
         res.status(200).json(FindLocation)

    }catch(err){
        res.status(401).json(err)
    }

}

exports.deleteSingleLocation=async(req,res)=>{
    const {id}=req.params
   //console.log(id);
try{
    const item=await Location.findByIdAndDelete({_id:id})
    
    res.status(200).json(item)
}catch(err){
    res.status(401).json(err)
}
    
}

exports.homeProjects=async(req,res)=>{
    const search=req.query.search
        const query={
            address:{$regex:search,$options:"i"}
        }
 try{
    const result=await Location.find(query)
    res.status(200).json(result)
 }catch(err){
    res.status(401).json(err)
    
    
 }
    
}

exports.singleLocationPage=async(req,res)=>{
    const{id}=req.params
    try{
        const item=await Location.find({_id:id})
        res.status(200).json(item)
    }catch(err){
        res.status(401).json(err)
    }
}




