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
    Email: req.body.email,
    Subject: req.body.subject,
    Message: req.body.message
}).then(function() {
    res.send({ redirect: '/' });
}).catch(function(err) {
    res.json(err);
});
});

module.exports = router;