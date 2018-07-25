var characterJSON = require("../CharacterData/characterJSON");
var signup = require("../config/signup");
var Player = require("../Models/player");
var login = require("../config/login");
var beginnerInventory = require("../CharacterData/inventoryJSON");

module.exports = function(app) {
    app.get("/", function(req, res) {
        console.log("Got connection!");
        res.send("Okay");
    });

    app.options("/login", function(req, res) {
        res.set('Access-Control-Allow-Origin', ['*']);
        res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.set('Access-Control-Allow-Headers', 'Content-Type');
        res.send("200");
    });

    //Process login form
    app.post("/login", login, function(req, res) {
        console.log("Got login");
        res.send("200");
    }
    );

    app.post("/makecharacter", login, async function(req, res) {
        console.log("Looking for player's account..");
        await Player.findOne( { "email" : req.body.Email }, async function(err, player) {
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
                        charData["Inventory"] = beginnerInventory();
                        player.characters.push(charData);
                        player.markModified("characters");
                        player.save(function(err) {
                            if(err) throw err;
                            else {
                                res.send("500");
                            }
                        });
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
                    if(characters.length == 0) {
                        res.send("2000");
                    }
                    else {
                        var data = JSON.stringify(characters);
                        console.log("Now sending characters..");
                        res.send(data);
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
        res.send("200");
    });
};