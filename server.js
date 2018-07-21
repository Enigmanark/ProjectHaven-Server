var express = require('express');
var bodyParser = require('body-parser'); 
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var port = 6007;

var configDB = require('./config/database.js');
mongoose.connect(configDB.url,{ useNewUrlParser: true }); //Connect to the database

var app = express();
app.use(bodyParser.json([{strict: false }]));

require("./config/passport")(passport); //pass passport to the configuration
app.use( session({ secret: 'iloveellyforeverandalways' }) ); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

require('./routes.js')(app, passport);
app.listen(6007);
console.log("Project Haven Server now listening on port " + port);