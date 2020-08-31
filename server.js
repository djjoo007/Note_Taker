const express = require('express');
const path = require('path');
const fs = require('fs');
const noteJSON = require('./db/db.json');

// Set up Express App
const app = express();
const PORT = process.env.PORT || 8081;

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// ROUTES
// Get Request
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });
  
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });

  app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
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

//   Post Request
app.post("/api/notes", function(req, res) {
    const newNotes = req.body;
});




// Delete Request
app.delete("/api/notes/:id", function(req, res) {

});



  // Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });