// it create and config the server 
const express = require("express");

//require auth Router

const authRouter = require("./routes/auth.routes");


require("dotenv").config();

const app = express();

//all middlewares
app.use(express.json());
app.use("/api/auth",authRouter);
//all middlewares

const connectToDb = require("./config/database");

connectToDb();



module.exports = app;