exports.index = function(req, res) {
	res.render('index', {
		flash: {
      message: req.flash('info'),
      warning: req.flash('warning')
    }
	});
};