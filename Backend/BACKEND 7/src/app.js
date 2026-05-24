const express = require("express");
const connect_to_DB = require("./config/databse");

const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello from the server");

})


connect_to_DB();
module.exports = app;
