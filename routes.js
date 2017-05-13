var exphbs = require("express-handlebars")

module.exports = function(app){

        // Our model controllers (rather than routes)
        var application_controller = require('./controllers/application_controller');
        var users_controller = require('./controllers/users_controller');

        app.use('/', application_controller);
        app.use('/users', users_controller);

        // Set Handlebars as the default templating engine.
		app.engine("handlebars", exphbs({ defaultLayout: "main" }));
		app.set("view engine", "handlebars");
   //other routes..
}