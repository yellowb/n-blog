"use strict"

const express = require('express');
let app = express();

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', userRouter);


//app.get('/:name', function(req, res) {
//    res.send('hello /, ' + req.params.name);
//});
//
//app.get('/users/:name', function(req, res) {
//    res.send('hello /users, ' + req.params.name);
//});

app.listen(8888);

console.log('Started server.');