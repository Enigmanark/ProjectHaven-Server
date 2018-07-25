
var Player = require("../Models/player");
var login = require("../config/login");
var updateCharacter = require("../CharacterData/updateCharacter");
var recover_all = require("../CharacterData/character_recover_all");

module.exports = function(app) {

    app.post("/getTraining", login, function(req, res) {
        console.log("Looking for player's account..");
        Player.findOne( { "email" : req.body.Email }, function(err, player) {
            if(player) {
                console.log("Found player's account");
                if(player.validPassword(req.body.Password)) {
                    console.log("Password is valid!");
                    console.log("Looking for character..");
                    var charName = req.body.Character["Name"];
                    var id = -1;
                    for(i = 0; i < player.characters.length; i++) {
                        var n = player.characters[i]["Name"];
                        if(n == charName) {
                            console.log("Found character!");
                            id = i;
                            break;
                        }
                    }
                    if(id == -1) {
                        console.log("Could not find character :^(");
                        res.send("400");
                    }
                    else {
                        newData = updateCharacter(req, res, req.body.Character, player.characters[id],
                            player, id, -1);
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

    app.post("/playerdie", login, function(req, res) {
        console.log("Looking for player's account..");
        Player.findOne( { "email" : req.body.Email }, function(err, player) {
            if(player) {
                console.log("Found account");
                if(player.validPassword(req.body.Password)) {
                    console.log("Valid password!");
                    console.log("Looking for character..");
                    var charName = req.body.Character["Name"];
                    var id = -1;
                    for(i = 0; i < player.characters.length; i++) {
                        var n = player.characters[i]["Name"];
                        if(n == charName) {
                            console.log("Found character!");
                            id = i;
                            break;
                        }
                    }
                    if(id == -1) {
                        console.log("Could not find character :^(");
                        res.send("400");
                    }
                    else {
                        newData = player.characters[id];
                        newData["Experience"] -= newData["ExperienceToLevelUp"] * 0.1;
                        newData = recover_all(newData);
                        player.characters[id] = newData;
                        player.markModified("characters");
                        player.save(function(err) {
                            if(err) console.log("Error saving character ;.;");
                            else {
                                var json = JSON.stringify(newData);
                                res.send(json);
                                console.log("Character updated and sent!");
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

    app.post("/updatecharacter", login, function(req, res) {
        console.log("Looking for player's account..");
        Player.findOne( { "email" : req.body.Email }, function(err, player) {
            if(player) {
                console.log("Found account");
                if(player.validPassword(req.body.Password)) {
                    console.log("Valid password!");
                    console.log("Looking for character..");
                    var charName = req.body.Character["Name"];
                    var id = -1;
                    for(i = 0; i < player.characters.length; i++) {
                        var n = player.characters[i]["Name"];
                        if(n == charName) {
                            console.log("Found character!");
                            id = i;
                            break;
                        }
                    }
                    if(id == -1) {
                        console.log("Could not find character :^(");
                        res.send("400");
                    }
                    else {
                        updateCharacter(req, res, req.body.Character, 
                            player.characters[id], player, id, req.body.EnemyID);
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
                        //The rest of the script executes in Get Weapon Data
                        require("../Weapons/GetWeaponData")(req, res, chosenCharacter);
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
}