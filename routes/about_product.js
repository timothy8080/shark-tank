var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about_product', function(req, res, next) {
  res.render('about_product', { title: 'Express' });
});

module.exports = router;