var models = require('../models');
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
    res.render('adminsignup');
});

router.post('/', function(req, res) {
    console.log(req.body);
    models.AdminSignUps.create({
        account: req.body.accountNumber,
        webId: req.body.webId,
        password: req.body.password
    }).then(function() {
        res.send({ redirect: './login' });
    }).catch(function(err) {
        res.json(err);
    });
});

module.exports = router;