const express = require("express");

const app = express();

app.use(express.json())

const note = [];

app.post("/note" , (req,res)=>{
   note.push(req.body)
   res.send("note is created")
})

app.get("/note" , (req,res)=>{
    
    res.send(note)
})

app.delete("/note/:index" , (req,res)=>{
    const index = parseInt(req.params.index)
     note.splice(index,1)
     
    res.send(`note ${parseInt(req.params.index)+1 } is deleted`)
})

app.patch("/note/:index", (req, res) => {

    const index = parseInt(req.params.index);

    note[index].description = req.body.description;
    note[index].title = req.body.title;

    res.send(`note ${index + 1} is updated`);

});

module.exports = app;
