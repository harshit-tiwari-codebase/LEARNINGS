const express = require("express");

const authRouter = express.Router();

const userModel = require("../models/user.models");

const jwt = require("jsonwebtoken");

const crypto = require("crypto");



// Register route
authRouter.post("/register", async (req, res) => {

    try {

        const { username, email, password } = req.body;

        const emailAlreadyExist = await userModel.findOne({
            email
        });

        if (emailAlreadyExist) {

            return res.status(409).json({
                message: "Email already exists in database"
            });

        }
        
        const hashedPass = crypto.createHash("md5").update(password).digest("hex")
        const user = await userModel.create({
            username,
            email,
            password:hashedPass
        });

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.cookie("USER_TOKEN", token);

        res.status(201).json({
            message: "User registered successfully",
            user,
            token
        });

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// Protected route
authRouter.post("/protected", async (req, res) => {

    console.log(req.cookies);

    res.status(200).json({
        message: "This is protected route"
    });

});


// Login route
authRouter.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await userModel.findOne({
            email
        });

        if (!user) {

            return res.status(404).json({
                message: "Email does not exist, register first"
            });

        }

        const isPassMatch =
            user.password === crypto.createHash("md5").update(password).digest("hex");

        if (!isPassMatch) {

            return res.status(400).json({
                message: "Password did not match"
            });

        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.cookie("USER_TOKEN", token);

        res.status(200).json({
            message: "User logged in successfully",
            user,
            token
        });

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = authRouter;