const express = require("express"); // import the package

const app = express(); // create an instance of the server 

//it is used to 
app.get("/",(req,res)=>{
  res.send("server is running ")
  
})

//it is used to start a server and listen the server at port 3000
app.listen(3000, ()=>{
  console.log("Server is running on the port 3000");
  
})

