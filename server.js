const express = require("express");
const path = require("path");
const fs = require("fs");
const noteJSON = require("./db/db.json");

// Set up Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// ROUTES
// html route Notes Page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });
  
// html route Home Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  
// api route
app.get("/api/notes", function(req, res) {
    res.json(noteJSON);
});

//   Post Request
app.post("/api/notes", function(req, res) {
    const newNotes = req.body;
    const id = noteJSON.length;
    newNotes.id = id +1;
    noteJSON.push(newNotes);
    noteUpdate(noteJSON);
    return res.json(noteJSON);
});

// app.get("/api/notes", function(req, res) {
//     fs.readFile("./db/db.json", "utf-8", function(data) {
//         return res.json(data);
//     });
// });

// app.get("/api/notes", function(req, res) {
//         // fs.readFile("./db/db.json", "utf8", function() {
//         //     return res.json(db);
//         // });
//         console.log(db);
//       return res.json(db);
//   });



// Delete Request
app.delete("/api/notes/:id", function(req, res) {
    const id = req.params.id;
    const note
});



  // Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });