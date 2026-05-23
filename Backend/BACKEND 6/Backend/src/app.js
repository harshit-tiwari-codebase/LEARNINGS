// create a server and configure it

const express = require("express");
const notemodel = require("./models/notes.model");
const cors = require("cors");
const path = require("path");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Serve React build files
app.use(express.static(path.join(__dirname, "../public")));


// Home Route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});


// Create Note (POST)
app.post("/api/notespad", async (req, res) => {

  try {

    const { title, description } = req.body;

    const note = await notemodel.create({
      title,
      description
    });

    console.log("Note created");

    res.status(201).json({
      message: "Note created successfully",
      note
    });

  } 
  
  catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});


// Get Notes (GET)
app.get("/api/notespad", async (req, res) => {

  try {

    const notes = await notemodel.find();

    res.status(200).json({
      message: "Notes fetched successfully",
      notes
    });

  } 
  
  catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});


// Delete Note (DELETE)
app.delete("/api/notespad/:id", async (req, res) => {

  try {

    await notemodel.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Note deleted successfully"
    });

  } 
  
  catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});


// Update Note (PATCH)
app.patch("/api/notespad/:id", async (req, res) => {

  try {

    const { description } = req.body;

    const updatedNote =
      await notemodel.findByIdAndUpdate(
        req.params.id,
        { description },
        { new: true }
      );

    res.status(200).json({
      message: "Note updated successfully",
      updatedNote
    });

  } 
  
  catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});


// React routes handler
app.get("*name", (req, res) => {

  res.sendFile(
    path.join(
      __dirname,
      "../public/index.html"
    )
  );

});

module.exports = app;