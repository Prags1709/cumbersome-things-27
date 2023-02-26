const mongoose=require("mongoose");
mongoose.set('strictQuery', false)
const connection=mongoose.connect("mongodb+srv://pragathees:prags@cluster0.uloohpj.mongodb.net/nxmproject?retryWrites=true&w=majority");


module.exports={connection}