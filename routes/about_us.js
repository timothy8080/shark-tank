var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about_us', function(req, res, next) {
  if (req.session.user){ 
      res.render('about_us', { title: 'Express', logged:true, username:req.session.user.username });
  } else {
      res.render('about_us', {logged:false});
  }
});

module.exports = router;
