const mongoose = require("mongoose");

async function connect_to_DB() {
  await mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("connected to DB");
  });
}

module.exports = connect_to_DB;
