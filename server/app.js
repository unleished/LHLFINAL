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
const bcrypt = require('bcrypt');


const knexConfig = require('./knexfile');
const knex = require("knex")(knexConfig["development"]); require("dotenv").config();
const jsonWebToken = require("jsonwebtoken");
const myJWTSecretKey = 'my-secret-key';
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
<<<<<<< HEAD
app.use('/api/v1/usersRouter', usersRouter);
=======
app.use('/api/v1/users', usersRouter);
>>>>>>> 7255c80403716c9c18c13cdda82155fe7ea393a6


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.post("/register", (req, res) => {
  const user = {
    email: req.params.email,
    password:req.params.password
  };

  bcrypt.hash(req.params.password, 10, function(err, hash) {
    user.password = hash;
    knex('users').insert(user)
    const newUser = {email: user.email};
    const token = jsonWebToken.sign(newUser, myJWTSecretKey);
    res.json({
      token: token
    });
  });
  // extract user info from the form -> create the user object
  // save it to database (bcrypt for password)

});

// app.use("/login", (req, res) => {
//   console.log(token, 'jimmy')
//   // get user object from the data source, Ex: database
// knex
//     .select("*")
//     .from("users")
//     .where({email: req.params.email}).first() // to avoid getting back an array since just one user.
//     .then(row => {
//       bcrypt.compare(req.params.password, row.password, function(err, res) {

//           if(res){
//             res.json({email: row.email});
//             const token = jsonWebToken.sign(user, myJWTSecretKey);
//             res.json({
//               token: token
//             });

//           }else{
//             console.error("error: ", err);
//           }
//       });
//     })
//     .catch(error => {
//       console.error("error: ", error);
//     });
  //extract the data from the form with body parser

  // retrieve the user in the database and authenticate

  // get the user back

  // sign with default (HMAC SHA256)

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


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
