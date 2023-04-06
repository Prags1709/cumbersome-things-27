const express=require("express");
const workR=express.Router();
const {wmodel}=require("../models/workspace")


workR.post("/join",async(req,res)=>{
    try {
        console.log(req.body)
        const data =new wmodel(req.body);
        await data.save();
        res.status(200).send("joined in channel")
    } catch (error) {
        res.send(error.message)
    }
})

workR.get("/data/:id",async(req,res)=>{
    let id = req.params.id
    try {
        let data=await wmodel.findOne({_id:id});
    
        res.status(200).send(data)
    } catch (error) {
        res.send(error.message)
    }
})

module.exports={workR}