var updateVitals = require("./updateVitals");
var Enemy = require("../Models/enemy");
var updateEquipment = require("./GetEquipmentData");
var train = require("../CharacterData/characterTraining");
var recover_all = require("../CharacterData/character_recover_all");

module.exports = function(req, res, newChar, originalChar, player, id, enemyID, gold=0, ) {
    /*/
        For shopping
    /*/
    if(enemyID == "Shop") {
        console.log("Now running update from shop");
        var newData = update_base(originalChar);
        newData["Gold"] = newData["Gold"] - gold;
        newData["Inventory"]["Weapons"] = newChar["Inventory"]["Weapons"];
        newData["Inventory"]["Armors"] = newChar["Inventory"]["Armors"];
        newData["Inventory"]["Shields"] = newChar["Inventory"]["Shields"];
        player.characters[id] = newData;
        player.markModified("characters");
        player.save(function(err) {
            if(err) console.log("error saving character..");
            else{
                updateEquipment(req, res, newData);
            }
        });
    }

    else if(enemyID == "Sell") {
        console.log("Now running update from sell");
        var newData = update_base(originalChar);
        newData["Gold"] = newData["Gold"] + Math.ceil((gold / 3));
        player.characters[id] = newData;
        player.markModified("characters");
        player.save(function(err) {
            if(err) console.log("error saving character..");
            else{
                updateEquipment(req, res, newData);
            }
        });
    }

    /*/
        For training with Alyonis
    /*/
    else if(enemyID == "Training") {
        var newData = update_base(originalChar);

        newData = train(newData, req.body.TrainingStat);
        if(newData == null) {
            console.log("Train failed to update character");
            res.send("502");
        }
        else {
            newData = require("../CharacterData/updateVitals").updateHealth(newData);
            newData = require("../CharacterData/updateVitals").updateStamina(newData);
            newData = require("../CharacterData/updateVitals").updateMana(newData);
            newData = recover_all(newData);
            player.characters[id] = newData;
            player.markModified("characters");
            player.save(function(err) {
                if(err) console.log("Error saving character ;.;");
                else {
                    updateEquipment(req, res, newData);
                }
            });
        }
    }
    /*/
        For battles that don't give experience
    /*/
    else if(enemyID == -1) {
        var newData = update_base(originalChar);

        player.characters[id] = newData;
        player.markModified("characters");
        player.save(function(err) {
            if(err) console.log("Error saving character ;.;");
            else {
                updateEquipment(req, res, newData);
            }
        });
    }
    /*/
    For enemies that do give experience and gold
    /*/
    else {
        Enemy.findOne({ "ID" : enemyID }, function(err, en) {
            if(err) {
                console.log("Query error or database offline or something");
                res.send("801");
            }
            else if(en){
                var experience = en.Experience;
                var gold = en.Gold;
                var newData = originalChar;
                newData["Experience"] += experience;
                newData["Experience"] = Math.round(newData["Experience"]);
                newData["Gold"] += gold;
                if(newData["Experience"] >= newData["ExperienceToLevelUp"]) {
                    newData["Experience"] -= newData["ExperienceToLevelUp"];
                    newData["ExperienceToLevelUp"] *= 1.3;
                    newData["ExperienceToLevelUp"] = Math.round(newData["ExperienceToLevelUp"]);
                    newData["Level"] += 1;
                    newData["TrainingPoints"] += 1;
                }
                newData = update_base(newData);
                player.characters[id] = newData;
                player.markModified("characters");
                player.save(function(err) {
                    if(err) console.log("Error saving character ;.;");
                    else {
                        updateEquipment(req, res, newData);
                    }
                });
            }
            else {
                console.log("Couldn't find an enemy with that ID");
                res.send("803");
            }
        });
    }

    function update_base(data) {
        var newData = data;
        newData = updateVitals.updateHealth(newData);
        newData = updateVitals.updateMana(newData);
        newData = updateVitals.updateStamina(newData);
        newData["CurrentHP"] = newChar["CurrentHP"];
        newData["CurrentSP"] = newChar["CurrentSP"];
        newData["CurrentMP"] = newChar["CurrentMP"];
        newData["CurrentWeaponID"] = newChar["CurrentWeaponID"];
        newData["CurrentShieldID"] = newChar["CurrentShieldID"];
        newData["CurrentArmorID"] = newChar["CurrentArmorID"];
        /*/
            Update Inventory here
        /*/
        newData["Inventory"]["HealthPotions"] = newChar["Inventory"]["HealthPotions"];
        newData["Inventory"]["StaminaPotions"] = newChar["Inventory"]["StaminaPotions"];
        newData["Inventory"]["ManaPotions"] = newChar["Inventory"]["ManaPotions"];

        return newData;
    }
};