var express = require('express');
var app     = express();

app.get('/', function(req, res) {
	res.send('<h1>Hello World!</h1>');
});

app.get('/me', function(req, res) {
	res.send('@AmirHassanAzimi');
});

app.get('/who/:name', function(req, res) {
	if(req.params.name) {
		var name = req.params.name;
	} else {
		res.send('Maziar was here...');
	}
	res.send(name + ' was here...');
});

app.get('/who/:name?/:title?', function(req, res) {
	var name  = req.params.name;
	var title = req.params.title;
	res.send(`<p>name: ${name} <br>${title}: title</p>`);
});

app.get('*', function(req, res) {
	res.send(`<h1 style="text-align: center;">Page Not Found 404</h1>`);
});

var server = app.listen(3000, function() {
	console.log("App is running at http://localhost:3000");
});