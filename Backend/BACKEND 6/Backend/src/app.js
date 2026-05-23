// create a server and configure it

const express = require("express");
const notemodel = require("./models/notes.model");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const path = require("path");
const notes = [];

app.get("/", (req, res) => {
  res.send("hello");
});

//used to create the data using POST method
app.post("/api/notespad", async (req, res) => {
  // notes.push(req.body);

  const { title, description } = req.body;
  const note = await notemodel.create({ title, description });
  console.log("note is created");

  res.status(201).json({
    message: "note created",
    note,
  });
});

//get the data using the api
app.get("/api/notespad", async (req, res) => {
  const notes = await notemodel.find();
  res.status(200).json({
    message: "note created",
    notes,
  });
});

//create the delete data using DELETE method
app.delete("/api/notespad/:id", async (req, res) => {
  await notemodel.findByIdAndDelete(req.params.id);

  console.log(req.params.id);

  res.status(200).json({
    message: "notes deleted successfully",
  });
});

//create the update feature using the PATCH method

app.patch("/api/notespad/:id", async (req, res) => {
  const id = req.params.id;
  const { description } = req.body;
  await notemodel.findByIdAndUpdate(id, { description });
  res
    .status(200)
    .json({ message: "notes description is updated successfully" });
});

app.use("*name", (req, res) => {
  
  
  res.sendFile(path.join(__dirname,"..","/public/index.html"));
});

module.exports = app;
