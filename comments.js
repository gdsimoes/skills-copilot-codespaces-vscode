// Create web server

var express = require('express');
var app = express();

app.get('/comments', function(req, res) {
  res.send('comments');
});

app.listen(3000, function() {
  console.log('Server running on port 3000');
});

