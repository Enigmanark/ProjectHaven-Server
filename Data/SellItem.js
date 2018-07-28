var Weapon = require("../Models/weapon");
var Armor = require("../Models/armor");
var Shield = require("../Models/shield");
var Player = require("../Models/player");
var updateCharacter = require("../CharacterData/updateCharacter");

module.exports = function(req, res) {
    Player.findOne( { "email" : req.body.Email }, function(err, player) {
        if(err) throw err;
        else if(player) {
            console.log("Found account");
            if(player.validPassword(req.body.Password)) {
                console.log("Valid password!");
                console.log("Looking for character..");
                var charName = req.body.Character["Name"];
                var characterData = player.characters;
                var chosenCharacter;
                for(i = 0; i < characterData.length; i++) {
                    var n = characterData[i]["Name"];
                    if(n == charName) {
                        console.log("Found character!");
                        chosenCharacter = characterData[i];
                        var index = i;
                        break;
                    }
                }
                if(chosenCharacter == null) {
                    console.log("Could not find character :^(");
                    res.send("400");
                }
                else {
                    var char = req.body.Character;
                    var id = req.body.ID;
                    var type = req.body.Type;
                    var slot = find_slot(player.characters[index]["Inventory"], type, id);
                    if(type == "Weapon") {
                        Weapon.findOne({ "ID" : id }, function(err, wep) {
                            if(err) throw err;
                            else if(wep) {
                                console.log("Sold weapon");
                                char["Inventory"]["Weapons"][slot] = null;
                                updateCharacter(req, res, char, player.characters[index], player, index, "Sell", wep["Gold"]);
                            }
                            else {
                                res.send("401")
                            }
                        });
                    }
                
                    else if(type == "Armor") {
                        Armor.findOne({ "ID" : id }, function(err, arm) {
                            if(err) throw err;
                            else if(arm) {
                                console.log("Sold armor");
                                char["Inventory"]["Armors"][slot] = null;
                                updateCharacter(req, res, char, player.characters[index], player, index, "Sell", arm["Gold"]);
                            }
                            else {
                                res.send("401")
                            }
                        });
                    }
                
                    else if(type == "Shield") {
                        Shield.findOne({ "ID" : id }, function(err, shil) {
                            if(err) throw err;
                            else if(shil) {
                                console.log("Sold shield");
                                char["Inventory"]["Shields"][slot] = null;
                                updateCharacter(req, res, char, player.characters[index], player, index, "Sell", shil["Gold"]);
                            }
                            else {
                                res.send("401")
                            }
                        });
                    }
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

    function find_slot(inventory, type, id) {
        if(type == "Armor") {
            var armors = inventory["Armors"];
            for(i = 0; i < armors.length; i++) {
                if(armors[i] == id) {
                    console.log("Found slot");
                    return i;
                }
            }
        }

        else if(type == "Weapon") {
            var weapons = inventory["Weapons"];
            for(i = 0; i < weapons.length; i++) {
                if(weapons[i] == id) {
                    console.log("Found slot");
                    return i;
                }
            }
        }

        else if(type == "Shield") {
            var shields = inventory["Shields"];
            for(i = 0; i < shield.length; i++) {
                if(shields[i] == id) {
                    console.log("Found slot");
                    return i;
                }
            }
        }
    }
};