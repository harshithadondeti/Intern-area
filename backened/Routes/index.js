const express=require("express")
const router=express.Router();
const ApplicationRoute=require("./ApplicationRoutes")
const intern=require("./InternshipRoute")
const job=require("./JobRoute")
const admin=require("./admin")
const User=require("./User")
router.get("/",(req,res)=>{
    res.send("this is backend")
})
router.use('/application',ApplicationRoute);
router.use('/internship',intern);
router.use('/job',job);
router.use('/admin',admin);
router.use('/User',User);

 module.exports=router;