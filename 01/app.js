var express = require('express');
var app     = express();

app.get('/', function(req, res) {
	res.send('<h1>Hello</h1> World!');
});

var server = app.listen(3000, function() {
	console.log("App is running at http://localhost:3000");
});