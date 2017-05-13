// Requiring necessary npm packages
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var path = require('path');
var Sequelize = require('sequelize');

// Requiring passport as we've configured it
// var passport = require("./config/passport");

// Creating express app and configuring middleware needed for authentication
var app = express();
var PORT = process.env.PORT || 9000;
var db = require("./models");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// Requiring our routes
require('./routes')(app);


// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
app.listen(PORT, function() {
    console.log("Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
});

module.exports = app;
