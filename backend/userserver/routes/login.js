const express=require("express");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const loginR=express.Router();
const cookieParser = require('cookie-parser')
const {Rmodel}=require("../models/user");
// const { client } = require("../redis/redis");

loginR.post("/login",async(req,res)=>{
    let {email,password}=req.body
    try {
       let data= await Rmodel.findOne({email}) 
       console.log(data)
       if(data){
        bcrypt.compare(password, data.password, async(err, result)=>{
            if(result){
            const token = jwt.sign({userID:data._id},data.Name,{expiresIn:"7 days"});
            const refresh=jwt.sign({userID:data._id},data.Name,{expiresIn:"30 days"});
            //await client.SETEX("refresh_token",30*24*60*60,refresh)
            // res.cookie("Name",data.Name)
            // res.cookie("email",data.email)
        
            // res.cookie("Token",token)

            res.status(200).send({"msg":"Login Successfull","token":token,"user":data})
            } else {
                res.send("Wrong Credntials")}
            });
        } else {
            res.status(404).send("Wrong Credntials")
        }
    }catch (error) {
       res.send("Something went wrong")
        console.log(error.message)
    
    }
    
})

module.exports={loginR}