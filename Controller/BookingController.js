
const Booking=require("../Model/BookingModel")




exports.bookLocation = async (req, res) => {
    console.log("Inside the booking controller");
    const { Name, Email, NumberofGuest, CheckIn, CheckOut, PlaceId, totalPrice, Phone } = req.body;
    const UserId=req.payload
    console.log(UserId);
    
    try{
        const booking = new Booking({
            Name,
            Email,
            NumberofGuest,
            CheckIn,
            CheckOut,
            PlaceId,
            totalPrice,
            Phone,
            UserId
            
        });
        await booking.save(); 
        res.status(200).json(booking);
    } catch (err) {
        res.status(401).json(err);
    }
};

exports.getAllBookingdata=async(req,res)=>{
    console.log('inside getallbookings');
    const UserId=req.payload;
    console.log(UserId);
    try{
        const result=await Booking.find({UserId}).populate("PlaceId")
        res.status(200).json(result)
    }catch(err){
        res.status(500).json(err)
    }

};
 
exports.deletesingleBooking=async(req,res)=>{

    console.log("inside the deletesingleBooking");
    const {id}=req.params
    console.log(id);
    try{
        const result=await Booking.findByIdAndDelete({_id:id})
       res.status(200).json(result)

    }catch(err){
        res.status(500).json(err)
    }

}