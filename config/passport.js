var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a account/webid and password
passport.use(new LocalStrategy(
  // Our user will sign in using an account, webid, rather than a "email"
  {
    usernameField: "account" 
  },
  function(account, webid, password, done) {
    // When a user tries to sign in this code runs
    db.adminSignUp.findAll({
      where: {
        account: account,
        webid: webid
      }
    }).then(function(adminSignUp) {
      // If there's no user with the given email
      if (!adminSignUp) {
        return done(null, false, {
          message: "Incorrect account or webid."
        });
      }
      // If there is a user with the given account, but the webid the user gives us is incorrect
     //   else if (!dbAdminSignUp.validWebid(webid)) {
     //     return done(null, false, {
     //      message: "Incorrect webid."
     //   });
     // }
      //if there is a user with the given accout AND webid, but the password the user gives us is incorrect
      else if (!adminSignUp.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, adminSignUp);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(adminSignUp, cb) {
  cb(null, userData);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;