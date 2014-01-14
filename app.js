/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var flash = require('connect-flash');
var app = express();

var routes = require('./routes');
var user = require('./routes/user');
var item = require('./routes/item');
var login = require('./routes/login');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layout');
app.set('view engine', 'html');
app.engine('html', require('hogan-express'));

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('awesomeseckret'));
app.use(express.session());
app.use(flash());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/login', login.page);
app.post('/login', function(req, res, next) {
	if (req.body.username == 'foo' && req.body.password == 'bar') {
		req.flash('info', 'Login success!!!');
	} else {
		req.flash('info', 'Failed to login!!!');
	}
	res.redirect('/')
});

app.get('/items', item.list);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});