var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req,res){
    res.render('login');
});


router.post('/', function(req, res) {
    console.log(req.body);
    models.adminSignUp.findOne({
        account: req.body.account,
        webId: req.body.webId
    }).then(function(res) {
        console.log(res);
    res.send({ redirect: '/member/orders' });
})
        //compare form entry to decrypted
        //if all good, res.redirect
        //if not, res.json an error to front
        //res.redirect("/orders");
    .catch(function(err) {
        res.json(err);
    });
});

module.exports = router;