const express = require("express");
const path = require("path");
const fs = require('fs');

// Set up Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// ROUTES
// Get Request
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
  });
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "Develop/public/index.html"));
  });

  app.get("api/notes", function(req, res) {
      res.json(noteJSON);
  });

  //Basic Route 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
  

  // Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });