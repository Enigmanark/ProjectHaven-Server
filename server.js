var express = require('express');
var bodyParser = require('body-parser'); 
var mongoose = require('mongoose');
var port = process.env.PORT || 80;

var configDB = require('./config/database.js');
mongoose.connect(configDB.url,{ useNewUrlParser: true }); //Connect to the database

var app = express();
app.use(bodyParser.json([{strict: false }]));

require('./routes.js')(app);
app.listen(port);
console.log("Project Haven Server now listening on port " + port);