var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/buy', function(req, res, next) {
  console.log("HHHHHHHHHHHHHH");
  console.log(req.body);
  if (req.body.username){
      res.render('buy', { title: 'Express' });
  } else {
      res.send("Please <a href='login'>Login</a> to buy the product.")
  }
});

module.exports = router;
