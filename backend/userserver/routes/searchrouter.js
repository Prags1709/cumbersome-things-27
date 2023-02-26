const express=require("express")
const {Rmodel}=require("../models/user")
const searchrouter=express.Router()

searchrouter.get("/name/:id",async(req,res)=>
{
    const id=req.params.id
    console.log(id)
    try {
        const users=await Rmodel.find()
        // const users=await Rmodel.find({Name:{$regex:id}})
        
        res.send(users)
        
    } catch (error) {
        res.send(error)
    }
  
})


module.exports={
    searchrouter
}
