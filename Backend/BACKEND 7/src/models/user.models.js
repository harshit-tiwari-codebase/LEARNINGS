const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  username: {
    type: String,
    unique: [true, "username already exists"]
  },

  email: {
    type: String,
    unique: [true, "email already exists"],
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "invalid email address"
    ]
  },

  password: {
    type: String,
    minlength:[6,"password must be more than 6 charecters"]
  }

});

const userModel = mongoose.model("registration Dets", userSchema);

module.exports = userModel;

