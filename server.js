const express = require("express");
const path = require("path");

// Set up Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//Basic Route 

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
  });
  
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "Develop/public/index.html"));
  });

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
  

  // Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });