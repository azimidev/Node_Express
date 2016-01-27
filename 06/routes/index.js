exports.index = function(req, res) {
	res.render('default', {
		title     : "Parsclick",
		classname : 'home',
		users     : ['Amir', 'Sara', 'Maziar']
	});
};

exports.about = function(req, res) {
	res.render('default', {
		title     : "About Us",
		classname : 'about'
	});
};
