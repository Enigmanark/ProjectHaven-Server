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
    return newData;
};