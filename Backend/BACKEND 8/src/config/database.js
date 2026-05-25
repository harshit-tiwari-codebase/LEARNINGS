const mongoose = require("mongoose");

async function connectToDb(){
    await mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("succesfully connected to the database");
    })
}

module.exports = connectToDb;