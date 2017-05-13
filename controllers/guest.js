var models = require('../models');
var express = require('express');
var router = express.Router();
var path = require('path')

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/about', function(req,res){
	res.render('about');
});

router.get('/services', function(req,res){
	res.render('services');
});

module.exports = router;
