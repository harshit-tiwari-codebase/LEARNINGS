// it create and config the server 
const express = require("express");

//require auth Router

const authRouter = require("./routes/auth.routes");






require("dotenv").config();

const app = express();

const cookieParser = require("cookie-parser");
const connectToDb = require("./config/database");

// all middlewares
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
// all middlewares

connectToDb();



module.exports = app;