const mongoose = require("mongoose");

const connectTodb =  ()=>{
     mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("connected to db");
     })
}

module.exports = connectTodb;
