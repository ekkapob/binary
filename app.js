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
var product = require('./routes/product');
var login = require('./routes/login');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/default');
app.set('partials', {
	header: 'shared/header',
	flash: 'shared/flash',
	footer: 'shared/footer'
});
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

app.use('/stylesheets', express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(path.join(__dirname, 'bower_components/bootstrap')));
app.set('images', path.join(__dirname, 'public/upload/images'));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/login', login.page);
app.post('/login', login.authenticate);

//REST routes
app.get('/products', product.index);
app.get('/products/new', product.new);
app.get('/products/:id', product.show);
// app.get('/products/:id/edit', product.edit);
app.post('/products', product.create(app.get('images')));
// app.put('/products/:id', product.update);
// app.delete('/products/:id', product.destroy);

app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});