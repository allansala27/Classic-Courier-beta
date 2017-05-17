var models  = require('../models');
var express = require('express');
var router  = express.Router();
var orm = require("../config/orm.js");

router.get('/', function(req,res){
	res.render('members')
})

router.get('/orders', function(req,res){
	res.render('orders');
})

module.exports = router;