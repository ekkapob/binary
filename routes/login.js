exports.page = function(req, res) {
	res.render('admin/login', {
		title: 'Login',
    hideNav: true
	});
}

exports.authenticate = function(req, res) {
  console.log(req.body);
  if (req.body.email == 'foo@bar.com' && req.body.password == 'bar') {
		req.session.authenticated = true;  	
    req.flash('info', 'Login successfully');
    res.redirect('/');
  } else {
    req.flash('warning', 'Failed to login!!!');
  }
}