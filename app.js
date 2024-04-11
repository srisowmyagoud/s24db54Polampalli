// Import required modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
 
// Import route files
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var doorsRouter = require('./routes/doors');
var gridRouter = require('./routes/grid'); 
var pickRouter = require('./routes/pick');
var doors = require("./models/doors");
var resourceRouter = require("./routes/resource");
// Create Express app
var app = express();
 
// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
 
// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 
// Route registration
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/doors', doorsRouter); 
app.use('/grid', gridRouter); 
app.use('/pick', pickRouter); 
app.use('/resource', resourceRouter); 
// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
 
// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});
require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);
//npm start
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});
// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
await doors.deleteMany();
let instance1 = new
doors({doors_type:"flush", doors_model:'wood',doors_price:15.4});
instance1.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});
let instance2 = new
doors({doors_type:"dutch", doors_model:'metal',doors_price:4});
instance2.save().then(doc=>{
console.log("Second object saved")}
).catch(err=>{
console.error(err)
});
let instance3 = new
doors({doors_type:"window", doors_model:'aliminium',doors_price:14});
instance3.save().then(doc=>{
console.log("Third object saved")}
).catch(err=>{
console.error(err)
});
}
let reseed = true;
if (reseed) {recreateDB();}

module.exports = app;
