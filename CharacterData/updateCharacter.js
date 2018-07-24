var updateVitals = require("./updateVitals");
var Enemy = require("../Models/enemy");

module.exports = function(newChar, originalChar, player, enemyID) {
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
            newData["Inventory"] = newChar["Inventory"];
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
        else {
            console.log("Couldn't find an enemy with that ID");
            res.send("803");
        }
    });
};