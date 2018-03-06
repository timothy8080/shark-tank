var express = require('express');
var router = express.Router();

var mongolib = require("../models/mongo");

/* GET home page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});

router.post("/signup", function(req, res, next) {
    mongolib.createUser(req.body.username, req.body.passwd);
    res.send("success, here is your password for everyone to see " + req.body.passwd);
});

module.exports = router;