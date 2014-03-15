exports.loginPage = function(req, res) {
  res.render('admin/login', {
    title: 'Login',
    hideNav: true
  });
}

exports.checkPriviledge = function(req, res, next) {
  if (req.session.authenticated) {
    next();
  } else {
    res.redirect('/');
  }
}

exports.authenticate = function(req, res) {
  if (req.body.email == 'foo' && req.body.password == 'bar') {
    req.session.authenticated = true;
    req.flash('info', 'Login successfully');
    res.redirect('admin/index');
  } else {
    res.locals
    res.render('admin/login', {
      title: 'Login',
      hideNav: true,
      flash: {
        error: "Incorrect username or password."
      }
    });
  }
}

exports.index = function(req, res) {
  res.render('admin/index');
}