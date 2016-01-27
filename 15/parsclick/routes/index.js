var express = require('express');
var router  = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
	var myArtwork = [];
	appdata.speakers.forEach(function(item) {
		myArtwork = myArtwork.concat(item.artwork);
	});
	res.render('index', {
		title   : 'Parsclick',
		artwork : myArtwork
	});
});

module.exports = router;
