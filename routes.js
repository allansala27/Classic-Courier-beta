var exphbs = require("express-handlebars")

module.exports = function(app){

        // Our model controllers (rather than routes)
        var guest = require('./controllers/guest');
        var member = require('./controllers/member');
        var signup = require('./controllers/signup_controller');
        var order = require('./controllers/order_controller');

        app.use('/', guest);
        app.use('/member', member);
        app.use('/signup', signup);
        app.use('/member/order', order);

        // Set Handlebars as the default templating engine.
        app.engine("handlebars", exphbs({ defaultLayout: "main" }));
        app.set("view engine", "handlebars");
   //other routes..
}