const express = require("express")
const { ChannelMod } = require("../models/channel")
const channle_router = express.Router()

channle_router.get("/channelData", async (req, res) => {
    try {
        const users = await ChannelMod.find()
        res.send(users)
    } catch (error) {
        res.send(error)
    }
})

channle_router.post("/addChannel", async (req, res) => {
    let payload = req.body
    try {
        let chnl = new ChannelMod(payload)
        await chnl.save()
        res.send("Channel has been added")
    } catch (error) {
        res.send({ "error": "something went wrong" })
    }
})


module.exports = {
    channle_router
}
