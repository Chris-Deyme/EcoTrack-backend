require('dotenv').config();
require('./models/connection');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var scoreRouter = require('./routes/scores');
var activityRouter = require('./routes/activities');
var structureRouter = require('./routes/structures');
var tipsRouter = require('./routes/tips')
var questRouter = require('./routes/quests')

var app = express();
const cors = require("cors")
app.use(cors()) 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/scores', scoreRouter);
app.use('/activities', activityRouter);
app.use('/structures', structureRouter);
app.use('/tips', tipsRouter);
app.use('/quests', questRouter);

module.exports = app;
