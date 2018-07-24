var randomBattle = require("../Battle/randomBattle");
var login = require("../config/login");

module.exports = function(app) {
    app.get("/randombattle", login, function(req, res) {
        var battle = randomBattle();
        console.log("Sending battle data");
        res.send(battle);
    });
};