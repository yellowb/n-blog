"use strict"

var path = require('path');
const express = require('express');
let app = express();

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);

// log middleware
app.use('/users', function(req, res, next) {
    console.log(req.url, '  ' , new Date().toString());
    next();
});
app.use('/users', userRouter);

//错误处理
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(8888);

console.log('Started server.');