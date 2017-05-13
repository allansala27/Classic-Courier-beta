var models = require('../models');
var express = require('express');
var router = express.Router();
var path = require('path')

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/about', function(req,res){
	res.sendFile(path.join(__dirname, '/../views/about.html'));
});

router.get('/services', function(req,res){
	res.sendFile(path.join(__dirname,'/../views/services.html'));
});

module.exports = router;
