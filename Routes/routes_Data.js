var blacksmith = require("../Data/HavenBlacksmith");
var login = require("../config/login");

module.exports = function(app) {

    app.get("/gethavenblacksmithinventory", login, function(req, res) {
        blacksmith(req, res);
    });
}