const express = require("express")
const socketio = require("socket.io")
const http = require("http")
//const {connection} = require("./config/db")
const {ChatModel} = require("./model/chat.model")

const formateMessage = require("./middle/message")

const app = express()
app.use(express.json())
const server = http.createServer(app)
const io = socketio(server)

app.get("/",(req,res)=>{
    res.send("WELCOME");
})

app.get("/channel",async (req,res)=>{
    let query = req.query;
    try {
        let data = await ChatModel.find({channel_name:"Channel 1"})
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send("Somethig went wrong")
    }
})

const botename = "We Connect"

io.on("connection",(socket)=>{

    console.log("one client joined");
   // console.log(socket.id);

    // socket.emit("welcome",formateMessage(botename, "Welcome to we connect"))

    socket.on("user_channel",({username,channel})=>{
        console.log(username,channel);
        socket.join(channel)
        socket.emit("welcome",formateMessage(botename, "Welcome to we connect"))

        socket.on("chatMessage",async (text)=>{
            console.log(text);
            
           // socket.join(channel)
            console.log(channel);
            io.to(channel).emit("message_all",formateMessage(username,text))
            // try {
            //     let data = new ChatModel({
            //         channel_name:channel,
            //         name:username,
            //         message:text
            //     })
            //     await data.save()
            // } catch (error) {
            //     console.log(error);
            // }
        })
    })
})

const PORT = 8081;
server.listen(PORT,async ()=>{
    // try {
    //     await connection;   
    // } catch (error) {
    //     console.log(error)
    // }
    console.log(`server running on port ${PORT}`);
})
