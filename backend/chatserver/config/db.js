const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://pragathees:prags@cluster0.uloohpj.mongodb.net/socket?retryWrites=true&w=majority")

module.exports = {connection}