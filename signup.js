var Player = require("./Models/player.js");

module.exports = function(req, res, next) {
    var json = req.body;
    var email = json.Email;
    var password = json.Password;

    //Check if there's an account already with that email
    Player.findOne( { "email" : email}, function(err, user) {
        if(err) throw err;
        if(user) { //If we found a user, then signup fails
            res.send("100");
            return false;
        }
        else {
            var newUser = new Player(); //Make a new user and set it's fields
            newUser.email = email; //set the email
            newUser.password = newUser.generateHash(password); //encrypt the password
            newUser.save(function(err) { //save the user
                return next(); //once we reach here, we're finished so return next()
            });
        }
    });
};