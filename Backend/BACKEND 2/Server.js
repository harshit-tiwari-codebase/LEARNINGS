const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    res.send("hello from home page")
})
app.get("/about", (req,res)=>{
    res.send("hello from about page")
})
app.get("/contact", (req,res)=>{
    res.send("hello from contact page")
})
app.get("/store", (req,res)=>{
    res.send("hello from store page")
})
app.get("/loop",(req,res)=>{
    let i ;
    let r = 0;

   for(i=0 ; i<=10 ; i++){
        
    r+=i;
        
    }
    res.send(r)
})
const port = 3000;

app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
    
})
