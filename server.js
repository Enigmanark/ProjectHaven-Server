var express = require('express');
var bodyParser = require('body-parser'); 
var mongoose = require('mongoose');
var port = process.env.PORT || 6007;

var configDB = require('./config/database.js');
mongoose.connect(configDB.url,{ useNewUrlParser: true }); //Connect to the database

var app = express();
app.use(bodyParser.json([{strict: false }]));

require('./Routes/routes_Account.js')(app);
require('./Routes/routes_battle.js')(app);
require('./Routes/routes_updateCharacter.js')(app);
app.listen(port);

//require("./Enemies/loadEnemiesIntoDB")();
//require("./Weapons/loadWeaponsIntoDB")();
console.log("Project Haven Server now listening on port " + port);