exports.page = function(req, res) {
	res.render('admin/login', {
		title: 'Login',
    hideNav: true
	});
}

exports.authenticate = function(req, res) {
  if (req.body.username == 'foo' && req.body.password == 'bar') {
		req.session.authenticated = true;  	
    req.flash('info', 'Login success!!!');
  } else {
    req.flash('warning', 'Failed to login!!!');
  }
  res.redirect('/')
}