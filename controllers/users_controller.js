var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/login', function(req,res){
	res.render('login');
});

router.get('/members', function(req,res){
	res.render('members');
})

router.get('/services', function(req,res){
	res.render('services');
})