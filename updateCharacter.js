var updateVitals = require("./updateVitals");

module.exports = function(newChar, experience, gold) {
    var newData = newChar;
    newData["Experience"] += experience;
    newData["Gold"] += gold;
    if(newData["Experience"] >= newData["ExperienceToLevelUp"]) {
        newData["Experience"] -= newData["ExperienceToLevelUp"];
        newData["ExperienceToLevelUp"] *= 1.3;
        newData["Level"] += 1;
        newData["TrainingPoints"] += 1;
    }
    newData = updateHealth(newData);
    newData = updateMana(newData);
    newData = updateStamina(newData);
    
    return newData;
};