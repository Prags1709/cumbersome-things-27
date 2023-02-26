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
const {workR}=require("./routes/workspace")
const {searchrouter}=require("./routes/searchrouter")

app.use("/search",searchrouter)

app.use("/mail",mroute)
app.use("/cred",loginR);
app.use("/channel",workR)
app.listen(8080,async()=>{
    try {
        await connection

        console.log("server running at port no 8080 \n db connected");

    } catch (error) {
        console.log("db is not connected")
       console.log(error.message) 
    }
})