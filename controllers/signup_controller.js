var models = require('../models');
var express = require('express');
var router = express.Router();
var path = require('path');
router.get('/', function(req, res) {
    res.render('signup');
});
router.post('/', function(req, res) {
    models.Account.create({
        company: req.body.company,
        name: req.body.name
    }).then(function() {
        res.redirect(307, "/login");
    }).catch(function(err) {
        res.json(err);
    });
});
module.exports = router;
