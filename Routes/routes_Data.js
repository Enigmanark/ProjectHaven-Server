var blacksmith = require("../Data/HavenBlacksmith");
var buy_item = require("../Data/BuyItem");
var sell_item = require("../Data/SellItem");
var login = require("../config/login");


module.exports = function(app) {

    app.post("/gethavenblacksmithinventory", login, function(req, res) {
        blacksmith(req, res);
    });

    app.post("/buyitem", login, function(req, res) {
        buy_item(req, res);
    });

    app.post("/sellitem", login, function(req, res) {
        sell_item(req, res);
    });
}