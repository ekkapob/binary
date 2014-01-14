exports.index = function(req, res) {
	res.render('index', {
		message: req.flash('info')
	});
};