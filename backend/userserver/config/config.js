const mongoose=require("mongoose");
mongoose.set('strictQuery', false)
const connection=mongoose.connect("mongodb+srv://birendra:biru@cluster0.ablmwzt.mongodb.net/nxmproject?retryWrites=true&w=majority");

module.exports={connection}