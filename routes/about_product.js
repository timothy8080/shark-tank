var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about_product', function(req, res, next) {
  if (req.session.user){
      res.render('about_product', { title: 'Express', logged:true, username:req.session.user.username });
  } else {
      res.render('about_product', {logged:false});
  }
});

module.exports = router;
