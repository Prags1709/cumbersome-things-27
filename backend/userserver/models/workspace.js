const mongoose=require("mongoose");
const workspaceSchema=mongoose.Schema({
    "Name":String,
    "email":String,
    "mobile":String,
    "password":String,
    "workspace":String
})

const wmodel=mongoose.model("workuser",workspaceSchema);

module.exports={wmodel}