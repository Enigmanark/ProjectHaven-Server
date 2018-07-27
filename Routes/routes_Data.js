var blacksmith = require("../Data/HavenBlacksmith");
var login = require("../config/login");

module.exports = function(app) {

    app.post("/gethavenblacksmithinventory", login, function(req, res) {
        blacksmith(req, res);
    });
}