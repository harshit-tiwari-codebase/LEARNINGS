const express = require("express");

const authRouter = express.Router();

const userModel = require("../models/user.models");

const jwt = require("jsonwebtoken");

const cookie = require("cookieparser");



authRouter.post("/register", async (req, res) => {
   
        const { username, email, password } = req.body;
        const emailAlreadyExist = await userModel.findOne({email});

        if(emailAlreadyExist){
            return res.status
            (409).json({message:"email already exist in databse "})
        }

        const user = await userModel.create({
            username,
            email,
            password
        });
        
        const token = jwt.sign({id:user._id , email:user.email},process.env.JWT_SECRET);

        res.cookie("USER_TOKEN",token)


        res.status(201).json({
            message: "User registered successfully",
            user,
            token
        });

        

     
});

module.exports = authRouter;