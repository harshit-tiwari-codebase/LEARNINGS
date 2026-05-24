const express = require("express");

const authRouter = express.Router();

const userModel = require("../models/user.models.js");

const jwt = require("jsonwebtoken");

authRouter.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const emailAlreadyExist = await userModel.findOne({ email });

  if (emailAlreadyExist) {
    return res.status(409).json({ message: "email already exist in DB" });
  }

  const user = await userModel.create({
    username,
    email,
    password,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );
  res.cookie("JWT_TOKEN" , token)
  res.status(201).json({
    message: "user is registered succesfully",
    user,
    token
  });
});

module.exports = authRouter;
