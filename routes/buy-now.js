var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/buy', function(req, res, next) {
  console.log("HHHHHHHHHHHHHH");
  console.log(req.session);
  if (req.session.user && req.session.user.username){
      res.render('buy', { title: 'Express', logged:true, username:req.session.user.username });
  } else {
      res.send("Please <a href='login'>Login</a> to buy the product.")
  }
});

module.exports = router;
