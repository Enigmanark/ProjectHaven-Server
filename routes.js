var signup = require("./signup");
var Player = require("./Models/player");
var login = require("./config/login");
var characterJSON = require("./characterJSON");

module.exports = function(app, passport) {
    app.get("/", function(req, res) {
        console.log("Got connection!");
        res.send("Okay");
    });

    //Process login form
    app.post("/login", login, function(req, res) {
        res.send("Success");
    }
    );

    app.post("/makecharacter", login, function(req, res) {
        console.log("Looking for player's account..");
        Player.findOne( { "email" : req.body.Email }, function(err, player) {
            if(player) {
                console.log("Found player's account");
                if(player.validPassword(req.body.Password)) {
                    console.log("Password is valid!");
                    var characters = player.characters;
                    if(characters.length == 5) {
                        res.send("600");
                    }
                    else {
                        console.log("Attempting to create character");
                        var charData = characterJSON;
                        charData["Name"] = req.body.Name;
                        characters.push(charData);
                        player.save(function(err) {
                            if(err) {
                                throw err;
                            }
                            console.log("Character created!");
                            res.send("500");
                        })
                    }
                }
                else {
                    res.send("300");
                }
            }
            else {
                res.send("300");
            }
        });
    });

    app.post("/choosecharacter", login, function(req, res) {
        console.log("Looking for player's account..");
        Player.findOne( { "email" : req.body.Email }, function(err, player) {
            if(player) {
                console.log("Found player's account");
                if(player.validPassword(req.body.Password)) {
                    console.log("Password is valid!");
                    var characters = player.characters;
                    var data = JSON.stringify(characters);
                    console.log("Now sending characters..");
                    res.send(data);
                }
                else {
                    res.send("300");
                }
            }
            else {
                res.send("300");
            }
        });
    });

    app.post("/getcharacter", login, function(req, res) {
        console.log("Looking for player's account..");
        Player.findOne( { "email" : req.body.Email }, function(err, player) {
            if(player) {
                console.log("Found account");
                if(player.validPassword(req.body.Password)) {
                    console.log("Valid password!");
                    console.log("Looking for character..");
                    var charName = req.body.Name;
                    var characterData = player.characters;
                    var chosenCharacter;
                    for(i = 0; i < characterData.length; i++) {
                        var n = characterData[i]["Name"];
                        if(n == charName) {
                            console.log("Found character!");
                            chosenCharacter = characterData[i];
                            break;
                        }
                    }
                    if(chosenCharacter == null) {
                        console.log("Could not find character :^(");
                        res.send("400");
                    }
                    else {
                        chosenCharacter = JSON.stringify(chosenCharacter);
                        res.send(chosenCharacter);
                        console.log("Character sent!");
                    }
                }
                else {
                    res.send("300");
                }
            }
            else {
                res.send("300");
            }
        });
    });

    app.post("/signup", signup, function(req, res) {
        res.send("Success");
    });
}