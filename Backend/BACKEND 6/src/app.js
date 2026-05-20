// create a server and configure it

const express = require("express");
const notemodel = require("./models/notes.model");
const app = express();

app.use(express.json());

const notes = [];

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/notespad", async (req, res) => {
  // notes.push(req.body);

  const { title, description } = req.body;
  const note = await notemodel.create({ title, description });
  console.log("note is created");

  res.status(201).json({
    message: "note created",
    note,
  });
});

app.get("/notespad", async (req, res) => {
    const a = await notemodel.find();
   res.status(200).json({
    message: "note created",
    a,
  })
});

module.exports = app;
