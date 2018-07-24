var randomBattle = require("../Battle/randomBattle");
var login = require("../config/login");

module.exports = function(app) {
    app.post("/randombattle", login, function(req, res) {
        randomBattle(res);
    });
};