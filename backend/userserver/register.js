const express=require("express");
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app=express();
app.use(express.json());
app.use(cookieParser())
app.use(cors())
const {connection}=require("./config/config")
const {mroute}=require("./mail/mail")
const {loginR}=require("./routes/login")

app.use("/mail",mroute)
app.use("/cred",loginR)
app.listen(8080,async()=>{
    try {
        await connection

        console.log("server running at port no 8080 \n db connected");

    } catch (error) {
        console.log("db is not connected")
       console.log(error.message) 
    }
})