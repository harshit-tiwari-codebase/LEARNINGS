// server ko create krenge
// server ko config krenge

const express = require("express");

const app = express();

app.use(express.json());

//requiring database

const db = require("./config/database");
// const connectTodb = require("./config/database");
 connectTodb();

const notes = [];

//post / notes
app.post("/notepad", (req, res) => {
  notes.push(req.body);
  res.status(201).json({
    message: "sucessfully created a note",
  });
  console.log(req.body);
});

//get / notes
app.get("/notepad", (req, res) => {
  
  res.status(200).json({
    notes:notes
  });
});

//delete /notes
app.delete("/notepad/:index", (req, res) => {
    
    const index = parseInt(req.params.index);
    notes.splice(index,1);


  res.status(204).json({
    delete:"note is deleted"
  });
});

//patch / notes
app.patch("/notepad/:index", (req, res) => {
    
    const index = parseInt(req.params.index);
    
    notes[index].user = req.body.user; 
    notes[index].age = req.body.age; 


  res.status(200).json({
    update:"note is updated successfully"
  });
});
//put / notes
app.put("/notepad/:index", (req, res) => {
    
    const index = parseInt(req.params.index);
    
    notes[index] = req.body; 
    notes[index] = req.body; 


  res.status(200).json({
    update:"note is updated successfully"
  });
});

module.exports = app;
