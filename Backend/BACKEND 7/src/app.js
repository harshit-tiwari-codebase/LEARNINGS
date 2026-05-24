const express = require("express");
const connect_to_DB = require("./config/databse");
const authRouter = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("hello from the server");

})

app.use("/api/auth",authRouter)

connect_to_DB();
module.exports = app;
