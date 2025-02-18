var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var flash = require('req-flash');
var multer = require('multer');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var sessionRouter = require('./routes/session');
var productRouter = require('./routes/product');
var cartRouter = require('./routes/cart');
var orderRouter = require('./routes/order');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view engine', 'pug');

// Parsing middleware
app.use(express.urlencoded({ extended: true }));

// Route untuk halaman login
app.get('/login', (req, res) => {
  res.render('login');
});

// Route untuk memproses form login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Lakukan autentikasi di sini
  res.send(`Username: ${username}, Password: ${password}`);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(flash());

// Menggunakan rute
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/session', sessionRouter);
app.use('/products', productRouter);
app.use('/cart', cartRouter);
app.use('/order', orderRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
