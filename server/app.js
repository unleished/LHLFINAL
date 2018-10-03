var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/api/v1/products');
var imagesRouter = require('./routes/api/v1/images');
var usersRouter = require('./routes/api/v1/users');



const knexConfig = require('./knexfile');
const knex = require("knex")(knexConfig["development"]); require("dotenv").config();


var app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(cors());
app.use('/', indexRouter);
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/images', imagesRouter);
app.use('/api/v1/users', usersRouter);

app.use("*", function(req, resp) {
  resp.sendFile(path.join(__dirname, '../client/build/index.html'));
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







// app.get("/verify/:token", (req, res) => {
//   try {
//     const tokenDecodedData = jsonWebToken.verify(
//       req.params.token,
//       myJWTSecretKey
//       );
//     return res.json({
//       error: false,
//       data: tokenDecodedData
//     });
//   } catch (error) {
//     res.json({
//       error: true,
//       data: error
//     });
//   }
// });



app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
