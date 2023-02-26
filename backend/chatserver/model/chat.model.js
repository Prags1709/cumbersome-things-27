const mongoose = require("mongoose")

const chatSchema = mongoose.Schema({
    channel_name:String,
    name:String,
    message:String,
    time:{type:Date, default:Date.now}
})

const ChatModel = mongoose.model("chat",chatSchema)

module.exports = {ChatModel}