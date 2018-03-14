var express = require('express');
var router = express.Router();

var mongolib = require("../models/mongo");

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { err:false });
});

router.post("/login", function(req, res, next) {
    mongolib.findUser(req.body.username, req.body.passwd, function(usr){
        if (!usr){
            res.render("login", {err:true});
        } else {
            req.session.user = req.body;
            res.redirect("/");
        }
    })
});

module.exports = router;
