var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Hot Restaurant (DATA)
// =============================================================
var reservations = [{
  routeName: "reserve",
  name: "Angie",
  phoneNumber: "919",
  email: "week",
  uniqueID: "Ang"
}];

// Routes
app.get("/", function(req, res) {
  res.send("Welcome to the Restaurant!");
});

// Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "home.html"));
// });

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/all", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});


// Search for 5 reservations - provides JSON
app.get("/api/reservations", function(req, res) {

	res.json(reservations);
//   var chosen = req.params.reservation;

// // if (reservation.length < 6) {
// // 	console.log(reservation.length);
// // 	console.log("hi");


//   if (chosen) {
//     console.log(chosen);


    // for (var i = 0; i < reservation.length; i++ ) {
    //   if (chosen === reservation[i].routeName) {
    //     return res.json(reservation[i]);
    //   }
    // }

  })

  app.post("/api/tables", function(req, res) {
  var reservation = req.body;
  // newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  // console.log(newcharacter);

  reservations.push(reservation);

  res.json(reservations);


    
  //}


})


// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});





















