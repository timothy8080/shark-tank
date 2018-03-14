var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');

var app = express();

app.use(session({

  secret: 'keyboard cat',

  resave: false,

  saveUninitialized: true

}));

var index = require('./routes/index');
var buy = require('./routes/buy-now');
var signup = require('./routes/signup');
var login = require('./routes/login');
var about_us = require('./routes/about_us');
var about_product = require('./routes/about_product');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(index);
app.use(signup);
app.use(buy);
app.use(login);
app.use(about_us);
app.use(about_product);

app.use(function(req, res, next) {
  var err = new Error('404 Not Found');
  err.status = 404;
  next(err);
});

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

var port = normalizePort(process.env.PORT || '3000');
 
app.listen(port);
