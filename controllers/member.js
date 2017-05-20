var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req,res){
	res.render('index');
})

router.get('/members', function(req,res){
	res.render('members')
})

router.get('/services', function(req,res){
	res.redirect('services');
})

module.exports = router;