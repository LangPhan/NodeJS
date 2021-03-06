var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const exphbs =  require('express-handlebars')

const route = require('./routes/index');
const db = require('./config/db/');
const { handlebars } = require('hbs');
var app = express();

//connect database
db.connect();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
const hbs = exphbs.create({
    helpers:{
        sum: (a,b) => a + b
    }
})
app.engine('handlebars',hbs.engine)
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Route init
route(app)

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
