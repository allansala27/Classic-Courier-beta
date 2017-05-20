// Requiring our models and passport as we've configured it
var db = require("./models");
var passport = require("./config/passport");

module.exports = function(app) {
 
  app.post("/api/login", passport.authenticate("local"), function(req, res) {

    res.redirect("./member/orders");
  });

  app.post("/api/adminSignUp", function(req, res) {
    console.log(req.body);
    db.User.create({
      account: req.body.account,
      webid: req.body.webid,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      res.json(err);
    });
  });

  
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("./userData", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        account: req.user.account,
        id: req.user.id
      });
    }
  });

};