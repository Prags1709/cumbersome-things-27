const Redis=require("ioredis");
require("dotenv").config()
const client = new Redis({
    port: 10058,
    host: process.env.redish_host,
    password: process.env.redish_password
})

module.exports={client}