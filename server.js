var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var serverStatic = require('serve-static');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', serverStatic(__dirname + '/app'));

var port = process.env.PORT || 8000;
app.listen(port);
console.log('Please go to http://localhost:' + port);
