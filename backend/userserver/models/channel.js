const mongoose=require("mongoose");
const channelSchema=mongoose.Schema({
    "channel":String,
})

const ChannelMod=mongoose.model("channel",channelSchema);

module.exports={ChannelMod}