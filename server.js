var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

var app = express();
var port = process.env.PORT || 3000;

var waitList = apiData("waitList.json");
var tables = [];

// apiData("tables.json", tables);
apiData("waitList.json");

function apiData(file){
	fs.readFile( file, "utf8", function(error, data) {
		return JSON.parse(data);
	});
}

if(waitList === undefined) waitList = [];
console.log(waitList);

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(__dirname + "./"));

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

// Get all tables
app.get("/api/tables", function(req, res) {
  res.json(tables);
});

// Get all waitlist
app.get("/api/waitList", function(req, res) {
  res.json(waitList);
});


// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  	var newBookIt = req.body;

  	console.log(newBookIt);
  	if(tables.length <= 5) tables.push(newBookIt);
  	else waitList.push(newBookIt);

  	res.json(newBookIt);
});

// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
