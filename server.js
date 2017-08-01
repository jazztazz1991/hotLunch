var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/bookIt", function(req, res) {
  res.sendFile(path.join(__dirname, "bookIt.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
