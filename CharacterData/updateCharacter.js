var updateVitals = require("./updateVitals");
var Enemy = require("../Models/enemy");
var updateWeapons = require("../Weapons/GetWeaponData");

module.exports = function(req, res, newChar, originalChar, player, id, enemyID) {
    if(enemyID == -1) {
        var newData = originalChar;
        newData = updateVitals.updateHealth(newData);
        newData = updateVitals.updateMana(newData);
        newData = updateVitals.updateStamina(newData);
        newData["CurrentHP"] = newChar["CurrentHP"];
        newData["CurrentSP"] = newChar["CurrentSP"];
        newData["CurrentMP"] = newChar["CurrentMP"];
        newData["CurrentWeaponID"] = newChar["CurrentWeaponID"];
        /*/
            Update Inventory here
        /*/
        newData["Inventory"]["HealthPotions"] = newChar["Inventory"]["HealthPotions"];
        newData["Inventory"]["StaminaPotions"] = newChar["Inventory"]["StaminaPotions"];
        newData["Inventory"]["ManaPotions"] = newChar["Inventory"]["ManaPotions"];
        player.characters[id] = newData;
        player.markModified("characters");
        player.save(function(err) {
            if(err) console.log("Error saving character ;.;");
            else {
                var json = JSON.stringify(newData);
                res.send(json);
            }
        });
    }
    
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
                newData = updateVitals.updateHealth(newData);
                newData = updateVitals.updateMana(newData);
                newData = updateVitals.updateStamina(newData);
                newData["CurrentHP"] = newChar["CurrentHP"];
                newData["CurrentSP"] = newChar["CurrentSP"];
                newData["CurrentMP"] = newChar["CurrentMP"];
                newData["CurrentWeaponID"] = newChar["CurrentWeaponID"];
                /*/
                Update Inventory here
                /*/
                newData["Inventory"]["HealthPotions"] = newChar["Inventory"]["HealthPotions"];
                newData["Inventory"]["StaminaPotions"] = newChar["Inventory"]["StaminaPotions"];
                newData["Inventory"]["ManaPotions"] = newChar["Inventory"]["ManaPotions"];
                player.characters[id] = newData;
                player.markModified("characters");
                player.save(function(err) {
                    if(err) console.log("Error saving character ;.;");
                    else {
                        updateWeapons(req, res, newData);
                    }
                });
            }
            else {
                console.log("Couldn't find an enemy with that ID");
                res.send("803");
            }
        });
    }
};