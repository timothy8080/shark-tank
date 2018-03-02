var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World');
});

var port = normalizePort(process.env.PORT || '3000');
 
app.listen(port);