var models = require('../models');
var express = require('express');
var router = express.Router();
var path = require('path');
router.get('/', function(req, res) {
    res.render('signup');
});

// register a user
router.post('/', function(req, res) {
	console.log(req.body);
models.Accounts.create({
    Company: req.body.company,
    Name: req.body.name,
    Address: req.body.address,
    City: req.body.city,
    State: req.body.state,
    Zip: req.body.zip,
    Telephone: req.body.telephone,
    Fax: req.body.fax,
    Email: req.body.email
}).then(function() {
    res.send({ redirect: '/login' });
}).catch(function(err) {
    res.json(err);
});
});


module.exports = router;