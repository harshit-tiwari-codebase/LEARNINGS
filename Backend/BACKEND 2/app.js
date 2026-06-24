const express = require("express");

const app = express();

app.get("/" , (req , res)=>{
    console.log("server is running");
    
})

module.exports = app;