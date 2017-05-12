// DEPENDENCIES
var path = require("path");

// ROUTING
module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/index.html"));
    });

    app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/login.html"));
    });

    app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/signup.html"));
    });

    app.get("/members", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/members.html"));
    });

    //default page
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/index.html"));
    });

};
