
var Player = require("../Models/player.js");
var JsonStrategy = require('passport-json').Strategy;

module.exports = function(passport) {
    //for persistent login
    passport.serializeUser(function(player, done) {
        done(null, player.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, player) {
            done(err, player);
        });
    });

    //Login strategy
    passport.use('local', new JsonStrategy({
        usernameProp: 'Email',
        passwordProp: 'Password'
    },
    function(email, password, done) { //callback with username and password from our form
        console.log("Checking");
        //Check if there's an account with that email
        Player.findOne( { "email" : email}, function(err, player) {
            if(err) throw err;
            if(player) { //If we found a user, then check password
                console.log("Found player");
                if(player.validPassword(password)) {
                    console.log("Valid password");
                    return done(null, player);
                }
            }
            else if(player == null){
                console.log("No player found with that email");
                return done(null, false);
            }
        });
    }));
};