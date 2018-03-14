var express = require('express');
var router = express.Router();

var mongolib = require("../models/mongo");

/* GET home page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express', logged:false, err:false });
});

router.post("/signup", function(req, res, next) {
    if (req.body.username && req.body.passwd && req.body.email && req.body.credcard){
      mongolib.createUser(req.body.username, req.body.passwd, req.body.email, req.body.credcard);
      res.redirect("/login");
    } else {
      res.render('signup', {logged:false, err:true});
    }
});

module.exports = router;
