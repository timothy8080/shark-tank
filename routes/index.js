var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   if (req.session.user && req.session.user.username){
       res.render('index', { logged:true, username:req.session.user.username });
   } else {
       res.render('index', { logged:false });
   }
});

module.exports = router;
