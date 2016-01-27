var express = require('express');
var app     = express();

app.set('view engine', 'ejs');

//app.set('views', __dirname + '/partials');

app.get('/', function(req, res) {
	res.render('default', {
		title: "Parsclick",
		classname: 'home',
		users: ['Amir', 'Sara', 'Maziar']
	});
});

app.get('/about', function(req, res) {
	res.render('default', {
		title: "About Us",
		classname: 'about'
	});
});

app.get('*', function(req, res) {
	res.send(`<h1 style="text-align: center;">Page Not Found 404</h1>`);
});

var server = app.listen(3000, function() {
	console.log("App is running at http://localhost:3000");
});

