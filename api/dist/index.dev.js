"use strict";

var express = require('express');

var app = express();

var mongoose = require("mongoose");

var dotenv = require('dotenv');

var authRoute = require('./routes/auth');

var userRoute = require('./routes/users');

var movieRoute = require('./routes/movies');

var listRoute = require('./routes/lists');

dotenv.config(); //middleware 

app.use(express.json()); //connect mongoose

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log("Database connected!");
})["catch"](function (err) {
  return console.log(err);
}); //routes

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/movies', movieRoute);
app.use('/api/lists', listRoute);
app.get("/", function (req, res) {
  res.send('Hello world');
});
app.listen(5000, function () {
  console.log('Server is running at port 5000');
});