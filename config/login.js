
var Player = require("../Models/player.js");

module.exports = function(req, res, next) {
    console.log("Checking");
    var json = req.body;
    var email = json.Email;
    var password = json.Password;
    //Check if there's an account with that email
    Player.findOne( { "email" : email}, function(err, player) {
        if(err) throw err;
        if(player) { //If we found a user, then check password
            console.log("Found player");
            if(player.validPassword(password)) {
                console.log("Valid password");
                next();
            }
        }
        else if(player == null){
            console.log("No player found with that email");
            res.send(404);
        }
    });
};