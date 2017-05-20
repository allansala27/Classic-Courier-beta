var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req,res){
	res.render('contact');
})

router.post('/', function(req, res) {
	console.log(req.body);
models.Contacts.create({
    Name: req.body.name,
    Email: req.body.name,
    Subject: req.body.address,
    Message: req.body.city
}).then(function() {
    res.send({ redirect: '/login' });
}).catch(function(err) {
    res.json(err);
});
});

module.exports = router;