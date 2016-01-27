var express = require('express');
var app     = express();
var route   = require('./routes');

app.set('view engine', 'ejs');

//app.set('views', __dirname + '/partials');

app.get('/', route.index);
app.get('/about', route.about);

app.locals.pagetitle = "Welcome Parsclick Website!";

app.get('*', function(req, res) {
	res.send(`<h1 style="text-align: center;">Page Not Found 404</h1>`);
});

app.listen(3000, function() {
	console.log("App is running at http://localhost:3000");
});

