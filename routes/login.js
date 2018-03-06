var express = require('express');
var router = express.Router();

var mongolib = require("../models/mongo");

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post("/login", function(req, res, next) {
    mongolib.findUser(req.body.username, req.body.passwd, function(usr){
        if (!usr){
            res.send("not found");
        } else {
            res.send("success, your email is, " + usr.email);
        }
    })
});

module.exports = router;