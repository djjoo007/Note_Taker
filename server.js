const express = require("express");
const path = require("path");
const fs = require("fs");
const noteJSON = require("./db/db.json");

// Set up Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Set up Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// ROUTES
// Html Route to Notes Page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });
  
// Html Route to Home Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  
// API Route Get to Notes
app.get("/api/notes", function(req, res) {
    res.json(noteJSON);
});

// API Route Post to Notes
app.post('/api/notes', (req, res) => {
  const lastId = noteJSON.length ? Math.max(...(noteJSON.map(note => note.id))) : 0;
  const id = lastId + 1;
  noteJSON.push( { id, ...req.body} );
  res.json(noteJSON.slice(-1));
  });
  
// Delete Request 
  app.delete('/api/notes/:id', (req, res) => {
  const note = noteJSON.find( ({ id }) => id === JSON.parse(req.params.id));
  noteJSON.splice( noteJSON.indexOf(note), 1);
  res.end();
  });

  // Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });