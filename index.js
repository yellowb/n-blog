"use strict"

const express = require('express');

let app = express();

app.get('/', function(req, res) {
    res.send('hello, express');
});

app.get('/users/:name', function(req, res) {
    res.send('hello, ' + req.params.name);
});

app.listen(8888);

console.log('Started server.');