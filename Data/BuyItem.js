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
                    var char = chosenCharacter;
                    var id = req.body.ID;
                    var type = req.body.Type;
                    var slot = has_empty_space(char, type);
                    if(slot == false) {
                        res.send("605");
                    }

                    if(type == "Weapon") {
                        Weapon.findOne({ "ID" : id }, function(err, wep) {
                            if(err) throw err;
                            else if(wep) {
                                if(has_enough_gold(char, wep)) {
                                    console.log("Bought weapon");
                                    char["Inventory"]["Weapons"][slot] = wep["ID"];
                                    updateCharacter(req, res, char, player.characters[i], player, index, "Shop", wep["Gold"]);
                                }
                                else res.send("606");
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
                                if(has_enough_gold(char, arm)) {
                                    console.log("Bought armor");
                                    char["Inventory"]["Armors"][slot] = arm["ID"];
                                    updateCharacter(req, res, char, player.characters[i], player, i, "Shop", arm["Gold"]);
                                }
                                else res.send("606");
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
                                if(has_enough_gold(char, shil)) {
                                    console.log("Bought shield");
                                    char["Inventory"]["Shields"][slot] = shil["ID"];
                                    updateCharacter(req, res, char, player.characters[i], player, i, "Shop", shil["Gold"]);  
                                }
                                else res.send("606");
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

    function has_enough_gold(char, item) {
        var gold = char["Gold"];
        var cost = item["Gold"];
        if(gold > cost) return true;
        else return false;
    }

    function has_empty_space(char, type) {
        if(type == "Armor") {
            var armorArray = char["Inventory"]["Armors"];
            for(i = 0; i < armorArray.length; i++) {
                if(armorArray[i] == null) return i;
            }
            return false;
        }

        else if(type == "Weapon") {
            var weaponArray = char["Inventory"]["Weapons"];
            for(i = 0; i < weaponArray.length; i++) {
                if(weaponArray[i] == null) return i;
            }
            return false;
        }

        else if(type == "Shield") {
            var shieldArray = char["Inventory"]["Shields"];
            for(i = 0; i < shieldArray.length; i++) {
                if(shieldArray[i] == null) return i;
            }
            return false;
        }
    }
};