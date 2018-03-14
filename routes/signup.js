var express = require('express');
var router = express.Router();

var mongolib = require("../models/mongo");

/* GET home page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express', logged:false });
});

router.post("/signup", function(req, res, next) {
    mongolib.createUser(req.body.username, req.body.passwd, req.body.email, req.body.credcard);
    res.redirect("/login");
});

module.exports = router;
