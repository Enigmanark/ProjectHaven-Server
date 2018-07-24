var randomBattle = require("../Battle/randomBattle");
var login = require("../config/login");

module.exports = function(app) {
    app.get("/randombattle", login, function(req, res) {
        var battle = randomBattle();
        battle = JSON.stringify(battle);
        res.send(battle);
    });
};