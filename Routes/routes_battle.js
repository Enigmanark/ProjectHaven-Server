var randomBattle = require("../Battle/randomBattle");
var login = require("../config/login");
var training = require("../Battle/trainer_alyonis");

module.exports = function(app) {
    app.post("/randombattle", login, function(req, res) {
        randomBattle(res);
    });

    app.post("/dotraining", login, function(req, res) {
        training(req, res);
    });
};