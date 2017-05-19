var models = require('../models');
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
    res.render('adminsignup');
});

router.post('/', function(req, res) {
    models.adminsignup.create({
        account: req.body.account,
        webid: req.body.webid,
        password: req.body.webid,
    }).then(function() {
        res.redirect(307, "/orders");
    }).catch(function(err) {
        res.json(err);
    });
});

module.exports = router;
