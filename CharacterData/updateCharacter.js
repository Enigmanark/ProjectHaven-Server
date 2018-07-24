var updateVitals = require("./updateVitals");

module.exports = function(newChar, originalChar, experience, gold) {
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
    return newData;
};