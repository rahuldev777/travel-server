 const express=require("express")
 const router=new express.Router()
 const UserController=require("../Controller/UserController")
const LocationController=require("../Controller/LocationController")
const jwtMiddleware=require("../Middleware/jwtMiddleware")
const multerConfig=require("../Middleware/MulterMiddleware")
const BookingController=require("../Controller/BookingController")
const adminController=require("../Controller/AdminController")
//const multipleUploads = require("../Middleware/MulterMiddleware")
//register user
 router.post("/user/register",UserController.register);
//login user
 router.post("/user/login",UserController.login);
//addlocation
 router.post("/index/addlocation",jwtMiddleware,multerConfig.array("addedphotos",5),LocationController.addLocation)
//getUseraddedLocation
 router.get("/index/addedhistory",jwtMiddleware,LocationController.getUserLocation)
//get specif added location details
router.get("/index/addedhistory/:id",LocationController.editUserLocation)
//updtae data 
router.put("/index/addedhistory/edit/:id",jwtMiddleware,multerConfig.array("addedphotos",5),LocationController.editSingleLocation)
//delete single data
router.delete("/index/addedhistory/delete/:id",jwtMiddleware,LocationController.deleteSingleLocation)
//fetch all locations to home
router.get('/index/home',LocationController.homeProjects)
//get single location-page details
router.get('/place/:id',LocationController.singleLocationPage)
//post booking for user
router.post('/place/book',jwtMiddleware,BookingController.bookLocation)
//Get all Booking History
 router.get('/mybookings',jwtMiddleware,BookingController.getAllBookingdata)
 //drop single data
 router.delete("/delete/:id",jwtMiddleware,BookingController.deletesingleBooking)
 //admin Login
 router.post("/admin",adminController.AdminLogin)
 //admin register
 router.post("/admin/register",adminController.AdminRegister)
 //get all users
 router.get("/admin/dashboard",adminController.fetchAllUsers)
 //delete single user 
 router.delete("/admin/dashboard/:id",jwtMiddleware,adminController.dropSingleUser)
 //get all packages
 router.get('/admin/packages',adminController.AllPackages)
 //get all bookings history
 router.get("/admin/reveniew",adminController.AllBookings)
 //get search data
//  router.get("/index",LocationController.GetsearchData)



 module.exports=router